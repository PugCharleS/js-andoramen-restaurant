const URL_API = "../json/dbrestaurant.json";


// <Funciones para Filtrar>
// Esta es la funcion para poder renderizar el menu del dia de forma procedural
$('#boton-menu').click(function (e) { 
  e.preventDefault();
  limpiar();

  $('#boton-menu').css('background-color', '#eeb243');
  $('#boton-ramen').css('background-color', '#ddd');
  $('#boton-bebidas').css('background-color', '#ddd');
  $('#boton-postres').css('background-color', '#ddd');

  spinner();

  setTimeout(() => {
    limpiar()
    renderMenu();
  }, 1000);
});

// Esta es la funcion para poder renderizar solo la categoria de ramen de forma procedural, ya filtrado desde el array de arriba
$('#boton-ramen').click(function (e) {
  e.preventDefault();
  limpiar();

  $('#boton-menu').css('background-color', '#ddd');
  $('#boton-ramen').css('background-color', '#eeb243');
  $('#boton-bebidas').css('background-color', '#ddd');
  $('#boton-postres').css('background-color', '#ddd');

  spinner();

  setTimeout(() => {

    limpiar();    

    $.get(URL_API, (response, status) => {
      if (status === 'success') {
        // Itero sobre cada uno de los elementos de todo
        for (const elemento of response) {
          // Aqui filtro, si la categoria del elemento es igual a ramen, entonces si lo puedo renderizar
          if (elemento.categoria === 'comidas') {
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
      } else {
        console.log('Error en Servidor');
      }
    });
  }, 1000);

});

// Esta es la funcion para poder renderizar solo la categoria de bebidas de forma procedural, ya filtrado desde el array de todo - JQuery
// Si le das click al boton de Bebidas renderiza las bebidas
$('#boton-bebidas').click(function (e) {
  e.preventDefault();
  limpiar();

  $('#boton-menu').css('background-color', '#ddd');
  $('#boton-ramen').css('background-color', '#ddd');
  $('#boton-bebidas').css('background-color', '#eeb243');
  $('#boton-postres').css('background-color', '#ddd');

  spinner();

  setTimeout(() => {
    limpiar();

    $.get(URL_API, (response, status) => {
      if (status === 'success') {
        // Itero sobre cada uno de los elementos de todo
        for (const elemento of response) {
          // Aqui filtro, si la categoria del elemento es igual a ramen, entonces si lo puedo renderizar
          if (elemento.categoria === 'bebida') {
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
      } else {
        console.log('Error en Servidor');
      }
    });
  }, 1000);

});

// Esta es la funcion para poder renderizar solo la categoria de postres de forma procedural, ya filtrado desde el array de arriba
$('#boton-postres').click(function (e) { 
  e.preventDefault();
  limpiar();

  $('#boton-menu').css('background-color', '#ddd');
  $('#boton-ramen').css('background-color', '#ddd');
  $('#boton-bebidas').css('background-color', '#ddd');
  $('#boton-postres').css('background-color', '#eeb243');

  spinner();

  setTimeout(() => {
    limpiar();

    $.get(URL_API, (response, status) => {
      if (status === 'success') {
        // Itero sobre cada uno de los elementos de todo
        for (const elemento of response) {
          // Aqui filtro, si la categoria del elemento es igual a ramen, entonces si lo puedo renderizar
          if (elemento.categoria === 'postres') {
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
      } else {
        console.log('Error en Servidor');
      }
    });
  }, 1000);

});
// <Funciones para Filtrar>