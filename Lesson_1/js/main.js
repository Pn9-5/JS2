const productsArr = [
  {id: 1, title: 'Notebook', imgsrc: './img/computer.png', price: 20000},
  {id: 2, title: 'Mouse', imgsrc: './img/mouse.png', price: 1500},
  {id: 3, title: 'Keyboard', imgsrc: './img/keyboard.png', price: 5000},
  {id: 4, title: 'Gamepad', imgsrc: './img/gamepad.png', price: 4500},
];

let col = 0;
const products = document.querySelector('.products');
const colEl = document.getElementById('col');
colEl.textContent = col;

products.addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  col++;
  colEl.textContent = col;
});

const renderProduct = (title = 'Product', price = 0, imgsrc = './img/pagenotfound.png') => {
  return `<div class="product-item">
            <h3>${title}</h3>
            <img src=${imgsrc} alt="">
            <p>${price}</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
};

const renderProducts = (list) => {
  const productList = list.map((good) => {
     return renderProduct(good.title, good.price, good.imgsrc);
  });
  products.innerHTML = productList.join('');
};

// renderProducts([{}, {}, {}]);

renderProducts(productsArr);




