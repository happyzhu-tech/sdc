const pool = require('../../db');

// const getStyles = (productId) => {
//   const text = 'WITH photos AS (SELECT photos.styleId AS style_id, photos.url, photos.thumbnail_url FROM photos GROUP BY photos.id order by photos.id), styles AS (SELECT styles.*, json_agg(photos) as photos FROM styles LEFT JOIN photos ON photos.style_id = styles.id GROUP BY styles.id order by styles.id), products AS (SELECT product.id, json_agg(styles) as results FROM product LEFT JOIN styles ON styles.productId = product.id GROUP BY product.id order by product.id) SELECT row_to_json(products) FROM products WHERE products.id = $1';
//   const values = [productId];

//   return new Promise((resolve, reject) => {
//     pool.query(text, values, (err, res) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res.rows[0].row_to_json);
//       }
//     });
//   });
// };

const getStyles = (productId) => {
  const text = 'SELECT id AS style_id, name, sale_price, original_price, default_style FROM styles WHERE productId = $1';
  const values = [productId];

  return new Promise((resolve, reject) => {
    pool.query(text, values, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows);
      }
    });
  })
    .then((styles) => {
      const promiseArr = styles.map((styleObj) => {
        const nestedQuery = 'SELECT url, thumbnail_url FROM photos WHERE styleId = $1';
        const args = [styleObj.style_id];
        return new Promise((resolve, reject) => {
          pool.query(nestedQuery, args, (err, res) => {
            if (err) {
              reject(err);
            } else {
              const newstyleObject = styleObj;
              newstyleObject.photos = res.rows;
              resolve(newstyleObject);
            }
          });
        });
      });
      return Promise.all(promiseArr);
    });
};

const getSkus = (styleId) => {
  const text = "SELECT json_object_agg(temp.id, temp.sku) as results FROM (SELECT id, json_build_object('size', size, 'quantity', quantity) AS sku FROM skus WHERE styleId = $1) AS temp";
  const values = [styleId];

  return new Promise((resolve, reject) => {
    pool.query(text, values, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows[0].results);
      }
    });
  });
};

module.exports = {
  getStyles,
  getSkus,
};
