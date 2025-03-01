class Products {
    constructor(nameProduct, amount, status) {
      this.nameProduct = nameProduct;
      this.amount = amount;
      this.status = status;
    }
  
    static sortProduct(a) {
      if (a.status == 'Не куплен') return -1; 
      if (a.status == 'Куплен') return 1; 
    }
  
    static showProduct(a) {
      return a.nameProduct;
    }
  }
   
  let shopList = [
    new Products('Яблоко', 10, 'Не куплен'),
    new Products('Апельсин', 5,'Куплен'),
    new Products('Груша', 7, 'Куплен'),
    new Products('Хлеб', 12, 'Не куплен'),
    new Products('Молоко', 4, 'Куплен'),
  ];
  let newProduct = new Products('Вафли', 2, 'Не куплен');

shopList.push(newProduct);
shopList.sort(Products.sortProduct);
console.log(shopList.map(Products.showProduct));

  // Сортируем список
shopList.sort(Products.sortProduct);

// Получаем элемент списка из HTML
const productListElement = document.getElementById('productList');

// Добавляем отсортированные продукты в HTML
shopList.forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.nameProduct} - ${product.amount} шт. (${product.status})`;
    productListElement.appendChild(listItem);
});

