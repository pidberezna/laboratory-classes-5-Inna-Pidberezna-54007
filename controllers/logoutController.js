const { LOGOUT_LINKS } = require('../constants/navigation');
const logger = require('../utils/logger');
const Product = require('../models/Product');

exports.getLogoutView = (request, response) => {
  const products = Product.getAll();
  const cartCount = products.length;

  response.render('logout.ejs', {
    headTitle: 'Shop - Logout',
    path: '/logout',
    activeLinkPath: '/logout',
    menuLinks: LOGOUT_LINKS,
    cartCount: cartCount,
  });
};

exports.killApplication = (request, response) => {
  logger.getProcessLog();
  process.exit();
};
