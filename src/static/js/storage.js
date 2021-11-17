// Paso mi array de productos de string a array de objetos
let cartStorage = JSON.parse(sessionStorage.getItem('cart'));

// Verifico que mi cartStorage no sea nulo e renderizo los productos guardados en la sesion
if (cartStorage !== null) {
  for (const product of cartStorage) {
    addOrder(product);
  }
} else {
  $('#cart-container').text('No ha agregado ningun platillo o bebida');
  sessionStorage.clear();
}