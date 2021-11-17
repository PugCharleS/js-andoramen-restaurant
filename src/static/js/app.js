// FUNCIONALIDAD DEL SIMULADOR

// =====Variables=====
// Variable para subtotal del total de productos
let subtotal = 0;
// Termina variables



// Array de Objetos para guardar los productos del carrito
let cart = [];
// Termina Objeto



// =====Funciones=====
// Esta es la funcion para poder renderizar el menu de forma procedural
function renderMenu() {
  limpiar();

  $('#boton-menu').css('background-color', '#eeb243');

  $.get(URL_API, (response, status) => {
    if (status === 'success') {
      // Itero sobre cada uno de los elementos de todo
      for (const elemento of response) {
        $('.menu').append(`
          <div class="item" id="${elemento.id}">
            <img src="${elemento.img}" alt="${elemento.nombre}">
            <div class="item-texts">
              <i class="fas fa-info-circle info-icon" id="info${elemento.id}"></i>
              <h2 class="item-texts__h2">${elemento.nombre}</h2>
              <p class="item-texts__price"><strike>$${(elemento.precio+30)}</strike><span>$${elemento.precio}</span></p>
              <p class="item-texts__desc" id="desc${elemento.id}">${elemento.desc}</p>
              <button class="addBtn" id="btn${elemento.id}">Agregar al Carrito</button>
            </div>
          </div>
        `);
      
        // Si el boton de agregar al carrito recibe un click, entonces llama a la funcion addOrder
        $(`#btn${elemento.id}`).on('click', function () {
          addOrder(elemento);
        });

        $(`#info${elemento.id}`).click(function (e) { 
          e.preventDefault();
          showInfo(elemento);
        });
      }
    } else {
      console.log('Error en Servidor');
    }
  });
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
  // Con este for no dejo que se renderice el objeto en caso de que el objeto ya exista dentro del array cart y solo sumo la cantidad de ese objeto en sus propiedas, de lo contrario, se renderiza
  if (cart.length === 0) {
    cart.push(elemento);
    renderCart();
    return false;
  } else {
    for (const prod of cart) {
      if (prod.id === elemento.id) {
        ++prod.cantidad;
        renderCart();
        return false;
      } 
    }
    cart.push(elemento);
    renderCart();
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
// <Funciones para la orden>



// <Funcionalidad extra>
function showInfo(elemento) {
  if ($(`#desc${elemento.id}`).css('display') === 'none') {
    $(`#desc${elemento.id}`).css('display', 'flex');
  } else {
    $(`#desc${elemento.id}`).css('display', 'none');
  }
}
// <Funcionalidad extra>



// <Funciones para disminuir y aumentar la cantidad de un producto>
const minusQuantity = (elemento) => {
  if (elemento.cantidad > 0) {
    --elemento.cantidad;
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



// <Funcion para calcular el IVA>
const iva = () => {
  return (subtotal*1.16).toFixed(2);
}
// <Funcion para calcular el IVA>



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



// <Funciones para mostrar y esconder el footer>
$('#boton-eliminar').click(function (e) { 
  e.preventDefault();
  $('#footer').slideUp(500);
});
 
// Funcion para poder mostrar el footer nuevamente despues de haber ocultado el boton flotante
$('#boton-flotante').click(function (e) { 
  e.preventDefault();
  $('#footer').slideDown();(500);
});
// <Funciones para mostrar y esconder el footer>



// <Funcinoes para meseros>
$('#boton-meseros').click(function (e) { 
  e.preventDefault();
  renderMeseros();
  renderMenu();
});

function renderMeseros() {
  document.getElementById('nav').innerHTML='';
  $('#boton-meseros').css('display', 'none');
  $('#nav').css('display', 'grid');
  $('.header__subtitle').html('BIENVENIDO &#8595;');
  $('#main').css('display', 'grid');

  document.getElementById('main').innerHTML='';

  $('#nav').append(`
    <div class="nav__filters">
      <a href="#" class="nav__items" id="boton-menu">MEN&Uacute; DEL D&Iacute;A</a>
      <a href="#" class="nav__items" id="boton-platillo">PRUEBA TU SUERTE</a>
      <a href="#" class="nav__items" id="boton-ramen">RAMEN</a>
      <a href="#" class="nav__items" id="boton-bebidas">BEBIDAS</a>
      <a href="#" class="nav__items" id="boton-postres">POSTRES</a>
    </div>  
  `);

  $('#main').append(`
  <!-- Accpordion -->
  <div id="accordion">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h5 class="mb-0">
          <button class="cartBtn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Ver Orden &#11021;
          </button>
        </h5>
      </div>
      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body" id="cart-container">
          <!-- Cart Content  -->       
          No ha agregado ningun platillo o bebida     
        </div>
        
      </div>
      <div class="payment" id="payment">
         
      </div>

      <div class="cartButtons">
        <button class="btn btn-danger" id="erase-cart">Borrar Orden</button>
        <button class="btn btn-success" data-toggle="modal" data-target="#ventanaModal" id="btn-ordenar">Ordenar</button>
      </div>

      <div class="modal fade" id="ventanaModal" tabindex="-1" role="dialog" aria-labelledby="tituloVentana" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 id="tituloVentana">Recibo</h5>
            </div>

            <div class="modal-body" id="modal-body">
              <!-- Generando orden -->
            </div>

            <div id="myProgress">
              <div id="myBar"></div>
            </div>                

            <div class="modal-footer">
              <button class="btn btn-warning" type="button" data-dismiss="modal" id="btn-cerrar-recibos">Cerrar</button>
              <button class="btn btn-success" type="button" id="btn-aceptar-recibo">Aceptar</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End of Accordion -->

  <!-- Menu Cards -->
  <div class="menu container" id="menu">
    <!-- Generating the Menu by JS -->
  </div>
  <!-- End of Menu Cards -->
  `);

  // Funcion para borrar el carrito al dar click sobre el boton 'Borrar Orden'
  $('#erase-cart').click(function (e) { 
    e.preventDefault();
    borrarCarrito();
  });


  $('#btn-ordenar').click(function (e) { 
    e.preventDefault();
    ordenar();
  });

  $('#btn-aceptar-recibo').click(function (e) { 
    e.preventDefault();
    aceptarRecibo();
  });

  $('#boton-menu').click(function (e) { 
    e.preventDefault();
    renderMenuDia();
  });

  $('#boton-ramen').click(function (e) {
    e.preventDefault();
    renderRamen();
  });

  $('#boton-bebidas').click(function (e) {
    e.preventDefault();
    renderBebidas();
  });

  $('#boton-postres').click(function (e) { 
    e.preventDefault();
    renderPostres();
  });

  $('#boton-platillo').click(function (e) { 
    e.preventDefault();
    console.log('Platillo');
    makeChoices()
  });
}

const borrarCarrito = () => {
  cart = [];
  sessionStorage.clear();
  $('#payment').css('display','none');
  $('#cart-container').text('No ha agregado ningun platillo o bebida');
  renderCart(); 
}

const ordenar = () => {
  $('#modal-body').text('');
  
  if (cart.length > 0) {
    $('#btn-aceptar-recibo').css({"display":"block"});
    for (const elemento of cart) {
      $('#modal-body').append(`
        <div class="alert alert-info">
          <strong style="font-size: 20px">${elemento.nombre}</strong>
          <br>
          <strong>Cantidad: <span style="color:red">${elemento.cantidad}</span></strong>
          <br>
          <strong>Precio: <span style="color:red">$${elemento.precio*elemento.cantidad}</span></strong>
        </div>
      `);
    }
  } else {
    $('#btn-aceptar-recibo').css({"display":"none"});
    $('#modal-body').html('<h3 style="color:black">No hay nada en el carrito</h3>');
  }

  if (cart.length > 0) {
    $('#modal-body').append(`
      <div class="alert alert-dark" id="total">
        <strong>SubTotal: $${subtotal}</strong>
        <strong>Total: $${iva(subtotal)}</strong>
      </div>
    `);
  }
}

const aceptarRecibo = () => {
  if (cart.length > 0) {
    move();
    $('#myProgress').css({"display":"block"});
  } 

  setTimeout(() => {
    cart = [];
    sessionStorage.clear();
    $('#payment').css('display','none');
    renderCart(); 

    $('#modal-body').text('');
    $('#modal-body').append(`<h2 style="color:black">Orden Recibida y en Proceso</h2>`);
    $('#btn-aceptar-recibo').css({"display":"none"});

    subtotal = 0;
    $('#myProgress').css({"display":"none"});
  }, 3000);
}
// <Funciones para meseros>



// =====Llamada de Funciones=====
renderMenu();