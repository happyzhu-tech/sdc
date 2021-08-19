const pool = require('../../db');

const getProductInfo = (productId, callback) => {
  const text = 'SELECT feature, value FROM features WHERE productId = $1';
  const values = [productId];

  const nestedQuery = 'SELECT * FROM product WHERE id = $1';
  const args = [productId];

  pool.query(text, values, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      pool.query(nestedQuery, args, (error, result) => {
        if (error) {
          callback(error, null);
        } else {
          const features = res.rows;
          const resultObj = result.rows[0];
          resultObj.features = features;
          callback(null, resultObj);
        }
      });
    }
  });
};

const getRelated = (productId) => {
  const text = 'SELECT related_productId FROM related WHERE productId = $1';
  const values = [productId];

  return new Promise((resolve, reject) => {
    pool.query(text, values, (err, res) => {
      if (err) {
        reject(err);
      } else {
        const result = res.rows.map((related) => (
          related.related_productid
        ));
        resolve(result);
      }
    });
  });
};

module.exports = {
  getProductInfo,
  getRelated,
};
