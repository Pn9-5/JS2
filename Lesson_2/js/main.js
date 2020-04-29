// Ex. 1
class ProductItemButtons {
  constructor(product, favorite = '.favorite', compare = '.compare', share = '.share') {
    this.id = product.id;
    this.favorite = favorite;
    this.compare = compare;
    this.share = share;
  }
  // У каждого товара будет лента кнопок - 'Добавить в избранное' , 'Сравнить', 'Поделиться'
  // В классе будем получать товар по id
  // В классе будут методы которые реализуют функционал кнопок
}

class ProductListRecommend {
  constructor(container) {
    // В корзине будет лента рекомендуемых товаров
  }
}

// Ex. 2
class ProductList {
  constructor(container = '.products', windowSum = '.windowSum') {
    this.container = container;
    this.windowSum = windowSum;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this._render();
    this._productsSum();
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 6000},
      {id: 4, title: 'Gamepad', price: 4500},
    ]
  }

  _render() {
    const block = document.querySelector(this.container);

    for (const product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
    this._productsSum();
  }

  _productsSum() {
    const getWindowSum = document.querySelector(this.windowSum);
    let point = this.goods.reduce((acc, el) => acc +  el.price, 0);
    getWindowSum.textContent = `Сумма заказа: ${point} ₽`;
  }

}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}
new ProductList();
