const cartModel = require('../models/cart.js');

module.exports = {
  addCart: (req, res) => {
    const { skuId } = req.body;
    const { count } = req.body;

    cartModel.addCart(skuId, count)
      .then((result) => {
        res.status(201).send('successfully add to the cart');
      })
      .catch((err) => {
        console.log('model addCart err', err);
        res.status(400).send('err');
      });
  },
};
