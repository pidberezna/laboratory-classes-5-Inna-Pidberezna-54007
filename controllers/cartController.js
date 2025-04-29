const Product = require('../models/Product');
const Cart = require('../models/Cart');
const { STATUS_CODE } = require('../constants/statusCode');

exports.addProductToCart = (request, response) => {
  Product.add(request.body);

  try {
    Cart.add(request.body.name);
  } catch (error) {
    console.error(error);
  }

  response.status(STATUS_CODE.FOUND).redirect('/products/new');
};

exports.getProductsCount = (request, response) => {
  const count = Cart.getProductsQuantity();
  response.status(STATUS_CODE.OK).json({ count });
};
