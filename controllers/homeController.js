const { MENU_LINKS } = require('../constants/navigation');
const Product = require('../models/Product');

exports.getHomeView = (request, response) => {
  const products = Product.getAll();
  const cartCount = products.length;

  response.render('home.ejs', {
    headTitle: 'Shop - Home',
    path: '/',
    activeLinkPath: '/',
    menuLinks: MENU_LINKS,
    cartCount: cartCount,
  });
};
