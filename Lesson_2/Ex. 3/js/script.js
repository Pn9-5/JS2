"use strict";

class Hamburger {
    constructor(container = '.container', resultWindow = '.result') {
        this.container = container;
        this.resultWindow = resultWindow;
        this.ccal = 0;
        this.price = 0;
        this.count = 0;
        this.humburgers = [];
        this.toppings = [];
        this.secondToppings = [];
        this._getSize();
        this._getTopping();
        this._getSecondTopping();
        this.init(this.count);
    }

    getAllProducts() {
        return [this.humburgers, this.toppings, this.secondToppings];
    }

    // Получить добавку
    _getTopping() {
        this.toppings = [
            {id: 11, title: 'cheese', price: 10, ccal: 20,},
            {id: 12, title: 'salad', price: 20, ccal: 5,},
            {id: 13, title: 'potatoes', price: 15, ccal: 10,},
        ];
    }

    // Получить "необязательную" добавку
    _getSecondTopping() {
        this.secondToppings = [
            {id: 21, title: 'seasoning', price: 15, ccal: 0,},
            {id: 22, title: 'mayo', price: 20, ccal: 5,},
            {id: 'skip', title: 'Пропустить', price: 0, ccal: 0,}
        ];
    }

    // Узнать размер гамбургера
    _getSize() {
        this.humburgers = [
            {id: 1, title: 'Small humburger', price: 50, ccal: 20,},
            {id: 2, title: 'Big humburger', price: 100, ccal: 40,},
        ];
    }

    // Запустить отображение
    render(group) {
        let container = document.querySelector(this.container);
        for (const product of group) {
            const productObject = new ProductItem(product);
            container.insertAdjacentHTML('beforeend', productObject.render());
        }

        this.runEvents();

    }

    runEvents() {
        const btns = document.querySelectorAll('.buy-btn');
        for (const el of [...btns]) {
            el.addEventListener('click', () => {
                this.price += +el.getAttribute('data-price');
                this.ccal += +el.getAttribute('data-ccal');
                console.log(this.price, this.ccal);
                this.count++;
                this.init(this.count);
            })
        }
    }

    // Запустить работу
    init(count) {
        this._clear();
        if (count >= this.getAllProducts().length) {
            document.querySelector(this.resultWindow).textContent = `Цена вашего бургера: ${this.price}, и калорий в нем: ${this.ccal}`;
            return;
        } else {
            this.render(this.getAllProducts()[count]);
        }

    }

    // Очистить содержимое
    _clear() {
        document.querySelector(this.container).textContent = '';
        document.querySelector(this.resultWindow).textContent = '';
    }

}

class ProductItem {
    constructor(product, img = 'https://place-hold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.ccal = product.ccal;
        this.img = img;
    }

    render() {
        if (this.id == 'skip') {
            return `<div class="product-item" data-id="${this.id}">
                    <button class="buy-btn" data-price="${this.price}" data-ccal="${this.ccal}">${this.title}</button>
            </div>`;
        }
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <p>${this.ccal} ccal</p>
                    <button class="buy-btn" data-price="${this.price}" data-ccal="${this.ccal}">Купить</button>
                </div>
            </div>`;
    }
}

new Hamburger();