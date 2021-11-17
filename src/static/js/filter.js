const URL_API = "../json/dbrestaurant.json";

// <Funciones para Filtrar>
// Esta es la funcion para poder renderizar el menu del dia de forma procedural
const renderMenuDia = () => {
  limpiar();
  colorMenu();
  spinner();

  setTimeout(() => {
    limpiar()
    renderMenu();
  }, 1000);
}

// Esta es la funcion para poder renderizar solo la categoria de ramen de forma procedural, ya filtrado desde el array de arriba
const renderRamen = () => {
  limpiar();
  colorRamen();
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
        }
      } else {
        console.log('Error en Servidor');
      }
    });
  }, 1000);
}

// Esta es la funcion para poder renderizar solo la categoria de bebidas de forma procedural, ya filtrado desde el array de todo - JQuery
// Si le das click al boton de Bebidas renderiza las bebidas
const renderBebidas = () => {
  limpiar();
  colorBebida();
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
        }
      } else {
        console.log('Error en Servidor');
      }
    });
  }, 1000);
}

// Esta es la funcion para poder renderizar solo la categoria de postres de forma procedural, ya filtrado desde el array de arriba
const renderPostres = () => {
  limpiar();
  colorPostre();
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
        }
      } else {
        console.log('Error en Servidor');
      }
    });
  }, 1000);
}

const makeChoices = () => {
  let choicesBebidas = [];
  let choicesComidas = [];
  let choicesPostres = [];

  $.get(URL_API, (response, status) => {
    if (status === 'success') {
      for (const product of response) {
        if (product.categoria === 'comidas') {
          choicesComidas.push(product);
        } else if (product.categoria === 'bebida') {
          choicesBebidas.push(product);
        } else {
          choicesPostres.push(product)
        }
      }
    }
    choose(choicesComidas, choicesBebidas, choicesPostres);
  });
}

function choose(choicesComidas, choicesBebidas, choicesPostres) {
  let randComida = Math.floor(Math.random() * choicesComidas.length);
  let randoBebida = Math.floor(Math.random() * choicesBebidas.length);
  let randPostre = Math.floor(Math.random() * choicesPostres.length);

  let choices = [];
  
  choices.push(choicesComidas[randComida], choicesBebidas[randoBebida], choicesPostres[randPostre])

  limpiar();

  for (const elemento of choices) {
    colorPlatillo();

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
}
// <Funciones para Filtrar>