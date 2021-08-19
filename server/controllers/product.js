const productModel = require('../models/product.js');

module.exports = {
  getProductInfo: (req, res) => {
    const productId = parseInt(req.params.productId, 10);
    productModel.getProductInfo(productId, (err, result) => {
      if (err) {
        console.log('model getProductInfo err', err);
        res.status(400).send('err');
      } else {
        res.status(200).send(result);
      }
    });
  },
  getRelated: (req, res) => {
    const productId = parseInt(req.params.productId, 10);
    productModel.getRelated(productId)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.log('model getRelated err', err);
        res.status(400).send('err');
      });
  },
};
