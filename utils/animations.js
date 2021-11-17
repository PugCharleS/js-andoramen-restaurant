const spinner = () => {
  $('#menu').append(`
    <div class="spinner">
      <div class="spinner-grow text-muted"></div>
      <div class="spinner-grow text-primary"></div>
      <div class="spinner-grow text-success"></div>
      <div class="spinner-grow text-info"></div>
      <div class="spinner-grow text-warning"></div>
      <div class="spinner-grow text-danger"></div>
      <div class="spinner-grow text-secondary"></div>
      <div class="spinner-grow text-light"></div>
    </div>
  `);

  return false;
}

const colorMenu = () => {
  $('#boton-menu').css('background-color', '#eeb243');
  $('#boton-ramen').css('background-color', '#ddd');
  $('#boton-bebidas').css('background-color', '#ddd');
  $('#boton-postres').css('background-color', '#ddd');
  $('#boton-platillo').css('background-color', '#ddd');
}

const colorRamen = () => {
  $('#boton-menu').css('background-color', '#ddd');
  $('#boton-ramen').css('background-color', '#eeb243');
  $('#boton-bebidas').css('background-color', '#ddd');
  $('#boton-postres').css('background-color', '#ddd');
  $('#boton-platillo').css('background-color', '#ddd');

}

const colorBebida = () => {
  $('#boton-menu').css('background-color', '#ddd');
  $('#boton-ramen').css('background-color', '#ddd');
  $('#boton-bebidas').css('background-color', '#eeb243');
  $('#boton-postres').css('background-color', '#ddd');
  $('#boton-platillo').css('background-color', '#ddd');

}

const colorPostre = () => {
  $('#boton-menu').css('background-color', '#ddd');
  $('#boton-ramen').css('background-color', '#ddd');
  $('#boton-bebidas').css('background-color', '#ddd');
  $('#boton-postres').css('background-color', '#eeb243');
  $('#boton-platillo').css('background-color', '#ddd');
}

const colorPlatillo = () => {
  $('#boton-menu').css('background-color', '#ddd');
  $('#boton-ramen').css('background-color', '#ddd');
  $('#boton-bebidas').css('background-color', '#ddd');
  $('#boton-postres').css('background-color', '#ddd');
  $('#boton-platillo').css('background-color', '#eeb243');
}


// Funcion para barra de carga
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
