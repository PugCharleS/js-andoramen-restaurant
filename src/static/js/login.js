const URL_LOGIN = "../json/dblogin.json";

// Animaciones Concatenadas
$( ".input" ).focusin(function () {
  $( this ).find( "span" ).animate({"opacity":"0"}, 200);
});

$( ".input" ).focusout(function () {
  $( this ).find( "span" ).animate({"opacity":"1"}, 300);
});


// Una vez que se haya hecho submit del form entonces comparo mis inputs con mi JSON de usuarios 
$(".login").submit(function(e){
  e.preventDefault();
  
  $.get(URL_LOGIN, (response, status) => {
      if (status === 'success') {  
        for (const user of response) {
          if ($('#user').val() === user.user && $('#password').val() === user.password) {

            confirmSubmit();

            setTimeout(() => {
              window.location.href = '../menu.html';
            }, 2000);

            return false;

          } else if ($('#user').val() !== user.user && $('#password').val() !== user.password) {
            continue;
          } else {
            errorSubmit();
          }
        }
      }
    }
  );
});
// Animaciones


const confirmSubmit = () => {
  $(this).find(".submit i").removeAttr('class').addClass("fa fa-check").css({"color":"#fff"});
  $(".submit").css({"background":"#2ecc71", "border-color":"#2ecc71"});
  $(".feedback").show().animate({"opacity":"1", "bottom":"-80px"}, 400);
  $("input").css({"border-color":"#2ecc71"});
}

const errorSubmit = () => {
  $(this).find(".submit i").removeAttr('class').addClass("fa fa-check").css({"color":"#fff"});
  $(".submit").css({"background":"#ff0000", "border-color":"#ff0000"});
  $('.submit').text('X');
  $(".feedback").text('Datos Incorrectos');
  $('.feedback').css("background", "#ff0000");
  $(".feedback").show().animate({"opacity":"1", "bottom":"-80px"}, 400);
  $("input").css({"border-color":"#ff0000"});

  setTimeout(() => {
    window.location.href = '../index.html';
  }, 600);
}