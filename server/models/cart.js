const pool = require('../../db');

const addCart = (skuId, count) => {
  const text = 'INSERT INTO cart (skuId, count) VALUES ($1, $2)';
  const values = [skuId, count];

  return new Promise((resolve, reject) => {
    pool.query(text, values, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

module.exports = {
  addCart,
};
