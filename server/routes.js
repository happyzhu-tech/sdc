const router = require('express').Router();
const productController = require('./controllers/product.js');
const styleController = require('./controllers/style.js');
const cartController = require('./controllers/cart.js');

router.get('/products/:productId', productController.getProductInfo);
router.get('/products/:productId/related', productController.getRelated);
router.get('/products/:productId/styles', styleController.getStyles);
router.get('/styles/:styleId/skus', styleController.getSkus);
router.post('/cart', cartController.addCart);

module.exports = router;
