
const getInputValue = id => {
      const inputField = document.getElementById(id);
      const inputValue = inputField.value;
      inputField.value = '';
      return inputValue;
}


const addingProduct = () => {
      const product = getInputValue('ProductName');
      const productQ = getInputValue('ProductQuantity');

      console.log(product, productQ);

      // localStorage.setItem(product, productQ);

      displayProducts(product, productQ);

      saveItemLS(product, productQ);

}

const getShoppingCart = () => {
      let saveCart = localStorage.getItem('cart');
      let cart = {};
      if (saveCart) {
            cart = JSON.parse(saveCart);
      }
      return cart;
}

const saveItemLS = (product, productQ) => {
      const cart = getShoppingCart();
      cart[product] = productQ;
      const cartstringified = JSON.stringify(cart);

      localStorage.setItem('cart', cartstringified);
}


const displayProducts = (product, productQ) => {
      const productDis = document.getElementById('ProuductContainer');
      const li = document.createElement('li');
      li.innerText = `${product} : ${productQ}`;
      productDis.appendChild(li);
}

const displayProductsCarts = () => {
      const cart = getShoppingCart();
      for (const product in cart) {
            const quantity = cart[product];
            console.log(product, quantity);
            displayProducts(product, quantity);
      }
}
displayProductsCarts();





