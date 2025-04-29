const Product = require('./Product');

class Cart {
  static #items = [];

  static add(productName) {
    const product = Product.findByName(productName);

    if (!product) {
      throw new Error(`Product with name "${productName}" does not exist`);
    }

    const existingCartItem = this.#items.find(
      (item) => item.product.name === productName
    );

    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      this.#items.push({
        product,
        quantity: 1,
      });
    }
  }

  static getItems() {
    return this.#items;
  }

  static getTotalPrice() {
    return this.#items.reduce((total, item) => {
      return total + parseFloat(item.product.price) * item.quantity;
    }, 0);
  }

  static getProductsQuantity() {
    return this.#items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  }

  static clearCart() {
    this.#items = [];
  }
}

module.exports = Cart;
