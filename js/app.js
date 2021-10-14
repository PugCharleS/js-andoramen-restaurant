// FUNCIONALIDAD DEL SIMULADOR

// =====Variables=====
// Variable para subtotal del total de productos
let subtotal = 0;
// Termina variables



// Array de Objetos para guardar los productos del carrito
let cart = [];
// Termina Objeto



// Clase
class Todo {
  // Objeto Constructor
  constructor(nombre, precio = 0, descripcion = 'No tiene descripción', categoria, img, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.img = img;
    this.cantidad = cantidad;
  }
  // Termina Objeto Constructor
}
// Termina Clase



// =====Funciones=====
$(() => {
  console.log('DOM READY');
})


// Esta es la funcion para poder renderizar el menu de forma procedural
function renderMenu() {
  limpiar();

  $('#boton-menu').css('background-color', '#eeb243');

  for (const elemento of todo) {
    $('.menu').append(`
    <div class="item" id="${elemento.id}">
      <img src="${elemento.img}" alt="${elemento.nombre}">
      <div class="item-texts">
        <h2 class="item-texts__h2">${elemento.nombre}</h2>
        <p class="item-texts__price"><strike>$${(elemento.precio+30)}</strike><span>$${elemento.precio}</span></p>
        <button class="addBtn" id="btn${elemento.id}">Agregar al Carrito</button>
      </div>
    </div>
    `);

    // Si el boton de agregar al carrito recibe un click, entonces llama a la funcion addOrder
    $(`#btn${elemento.id}`).on('click', function () {
      addOrder(elemento);
    });
  }
}


// <Funciones para la orden>
// Funcion para renderizar el array del carrito u orden
const renderCart = () => {
   // Si no hay nada dentro del array del carrito imprime 'No ha agregado ningun platillo o bebida'
  if (cart.length == 0) {
    $('#cart-container').text('No ha agregado ningun platillo o bebida');
  } else {
    // En caso de que haya objetos dentro del array del carrito entonces recorre mi array del carrito y los renderiza
    cleanCart();
    subtotal = 0;
    
    // Paso mis productos al sessionStorage para poder guardarlos al actualizar
    sessionStorage.setItem('cart', JSON.stringify( cart ));

    // Itero sobre cada uno de los productos dentro del array de cart para poder renderizarlos en la orden
    for (const elemento of cart) {
      if (elemento.cantidad > 0) {

        $('#cart-container').append(`
          <div class="product">
            <img src="${elemento.img}" alt="${elemento.nombre}">
            <p class="product-nombre">${elemento.nombre}</p>
            <p class="product-precio">$<span>${(elemento.precio*elemento.cantidad)}</span></p>
            <div class="circle">${elemento.cantidad}</div>
            <button class="boton-menos" id="btn-menos${elemento.id}"><</button>
            <button class="boton-mas" id="btn-mas${elemento.id}">></button>
            <button class="boton-deleteCart" id="btn-dlt${elemento.id}">X</button>
          </div>
        `);
    
        // Llamada para la funcion de borrar producto al dar click en el boton X
        $(`#btn-dlt${elemento.id}`).click(function () {
          deleteOrder(cart.indexOf(elemento), elemento);
        });

        // Disminuir la cantidad de productos al dar click en <
        $(`#btn-menos${elemento.id}`).click(function () {
          minusQuantity(elemento);
        });

        // Aumentar la cantidad de productos al dar click en >
        $(`#btn-mas${elemento.id}`).click(function () { 
          maxQuantity(elemento);
        });

        // Si el cart tiene elementos entonces puedo mostrar el subtotal y sumar el producto al subtotal
        if (cart.length > 0) {
          subtotal += elemento.precio*elemento.cantidad;
          $('#payment').css('display','block');
          $('#payment').text(`SubTotal: $${subtotal}`);
        }
      } else {
        $('#payment').css('display','none');
        // checkStorage(cart.indexOf(elemento), elemento);
      }
    }
  } 
}

// Funcion para poder hacer push del producto hacia el array de mi carrito
const addOrder = (elemento) => {
  cart.push(elemento);
  // Con este for no dejo que se renderice el objeto en caso de que el objeto ya exista dentro del array cart y solo sumo la cantidad de ese objeto en sus propiedas, de lo contrario, se renderiza
  for(let i = cart.length -1; i >=0; i--){
    if(cart.indexOf(cart[i]) !== i) {
      cart.splice(i,1)
      // Aqui sumo la cantidad si ya existe el objeto dentro del array cart
      ++elemento.cantidad;
      renderCart();
    } else {
      renderCart();
    }
  }
}

// Funcion para poder borrar un producto del array de carrito
const deleteOrder = (i, elemento) => {
  cart.splice(i, 1);
  // Si el array cart es mayor a 1 entonces que se muestre el subtotal
  if (cart.length < 1) {
    $('#payment').css('display','none');
    $('#payment').text(`SubTotal: $${subtotal}`); 
  }
  elemento.cantidad = 1;
  sessionStorage.setItem('cart', JSON.stringify( cart ));
  renderCart();
}

// Funcion para borrar el carrito al dar click sobre el boton 'Borrar Orden'
$('#erase-cart').click(function (e) { 
  e.preventDefault();
  cart = [];
  sessionStorage.clear();
  $('#payment').css('display','none');
  $('#cart-container').text('No ha agregado ningun platillo o bebida');
  renderCart(); 
});
// <Funciones para la orden>


// <Funciones para disminuir y aumentar la cantidad de un producto>
const minusQuantity = (elemento) => {
  if (elemento.cantidad !== 0) {
    --elemento.cantidad;
    sessionStorage.setItem('cart', JSON.stringify( cart ));
    renderCart();
  }
}

const maxQuantity = (elemento) => {
  if (elemento.cantidad !== 0) {
    ++elemento.cantidad;
    renderCart();
  }
}
// <Funciones para disminuir y aumentar la cantidad de un producto>


// <Funciones para mostrar y esconder el footer>
$('#boton-eliminar').click(function (e) { 
  e.preventDefault();
  $('#footer').css('display', 'none');
  $('#boton-flotante').css('display', '');
});

// Funcion para poder mostrar el footer nuevamente despues de haber ocultado el boton flotante
$('#boton-flotante').click(function (e) { 
  e.preventDefault();
  $('#footer').css('display', '');
  $('#boton-flotante').css('display', 'none');
});
// <Funciones para mostrar y esconder el footer>



// <Funciones para limpiar el HTML>
// Esta funcion es para poder limpiar lo que se muestra en pantalla para posteriormente poder mostrar sola el render del filtro
const limpiar = () =>   {
  $('.menu').text('');
}

// Funcion para limpiar lo que se muestra dentro de la orden o carrito
const cleanCart = () => {
  $('#cart-container').text('');
}
// <Funciones para limpiar el HTML>
// Termina Funciones



// =====Llamada de Funciones=====
renderMenu();

