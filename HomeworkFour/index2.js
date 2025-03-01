class Products {
    constructor(nameProduct, amount, status) {
      this.nameProduct = nameProduct;
      this.amount = amount;
      this.status = status;
    }
  
    static compareStatus(a, b) {
      if (a.status > b.status) return 1;
      if (a.status < b.status) return -1;
      return 0;
    }
  
    static showProduct(a) {
      return a.nameProduct;
    }
  }
  
  let shopList = [
    new Products("Яблоко", 10, 50),
    new Products("Апельсин", 5, 70),
    new Products("Груша", 7, 64),
    new Products("Хлеб", 12, 25),
    new Products("Молоко", 4, 42),
  ];
  
  // Сложение всех статусов
  const totalStatus = shopList.reduce((sum, product) => sum + product.status, 0);
  //Средняя стоимость одногно товара в чеке
  const Mean = (totalStatus / shopList.length); 
  //Продукт с самой высокой стоимостью
  const maxStatusProduct = shopList.reduce((maxProduct, currentProduct) => {
    return (currentProduct.status > maxProduct.status) ? currentProduct : maxProduct;
  });
  
  

  const productListElement = document.getElementById('productList');


 shopList.forEach(product => {
    const listItem = document.createElement('p');
    listItem.textContent  = 
    `${product.nameProduct} - ${product.amount} шт. - ${product.status}руб.
    Сумма всех продуктов: ${totalStatus} 
    Средняя стоимость одногно товара в чеке: ${Mean} 
    Продукт с самой высокой стоимостью: ${Products.showProduct(maxStatusProduct)}`;
    productListElement.appendChild(listItem);
});

const printButton = document.getElementById('print-button')

printButton.addEventListener('click', function() {
  window.print()
})


