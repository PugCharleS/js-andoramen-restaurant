function getBotResponse(input) {
  if (input == "ayuda") {
      return "No uses acentos para tus preguntas por favor";
  } else if (input == "cuantos platillos puedo pedir") {
      return "Tantos como gustes";
  } else if (input == "hola") {
      return "¿Cómo estás?";
  } else if (input == "bien") {
      return "Que bueno, ¿En qué te puedo ayudar?";
  }

  if (input == "metodo de pago") {
      return 'Visa, MasterCard, PayPal, MercadoPago';
  } else if (input == "tiempo de pedido") {
      return "Depende de la cantidad de pedidos y platillos";
  } else if (input == "que platillo es el mas rico") {
    return "Todos son igual de ricos";
  } else {
    return "Intenta con 'Ayuda'";
  } 
}