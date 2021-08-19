const styleModel = require('../models/style.js');

module.exports = {
  getStyles: (req, res) => {
    const productId = parseInt(req.params.productId, 10);
    styleModel.getStyles(productId)
      .then((result) => {
        const final = {};
        final.product_id = productId;
        final.results = result;
        res.status(200).send(final);
      })
      .catch((err) => {
        console.log('model getStyles err', err);
        res.status(400).send('err');
      });
  },
  getSkus: (req, res) => {
    const styleId = parseInt(req.params.styleId, 10);
    styleModel.getSkus(styleId)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.log('model getSkus err', err);
        res.status(400).send('err');
      });
  },
};
