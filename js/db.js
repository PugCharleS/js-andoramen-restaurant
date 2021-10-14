// =====Arrays de Objetos=====
const todo = [
  {
    id: 1,
    nombre: 'Ramen Shoyu',
    precio: 200,
    descripcion: 'El tipo de ramen más popular, el caldo tiene la fragancia de la salsa de soya y un profundo y rico sabor.     Como el ramen shio, el caldo está hecho de huesos de pollo (“torigara”) y productos del mar; algunos restaurantes pueden agregarle otros ingredientes como huesos de cerdo (“tonkotsu”)',
    categoria: 'comidas',
    img: '../assets/images/ramen-shoyu.jpg',
    cantidad: 1
  },
  {
    id: 2,
    nombre: 'Miso Ramen',
    precio: 150,
    descripcion: 'Los restaurantes que se especializan en el ramen de miso utilizan miso hecho en casa para hacer su sopa. Estas recetas contienen diferentes tipos de miso como miso quemado, miso blanco, miso rojo, miso de frijol de soya y miso de arroz. Los toppings son abundantes, maíz dulce, mantequilla y vegetales salteados.' ,
    categoria: 'comidas',
    img: '../assets/images/miso-ramen.jpg',
    cantidad: 1
  },
  {
    id: 3,
    nombre: 'Tonkotsu ramen',
    precio: 150,
    descripcion: 'El caldo de Tonkotsu se hace hirviendo los huesos de cerdo. El Tonkotsu ramen tiene un olor agudo comparado con la demás variedades de ramen, la gente lo odia o lo ama. El caldo de Tonkotsu toma muchas formas, puede ser suave y ligero o tan pesado que se pega a la cuchara. También hay sopas de shoyu-tonkotsu y shio-tonkotsu.' ,
    categoria: 'comidas',
    img: '../assets/images/tonkotsu-ramen.jpg',
    cantidad: 1
  },
  {
    id: 4,
    nombre: 'Tsukemen',
    precio: 250,
    descripcion: 'Tsukemen es un ramen similar al soba. Los fideos se ponen en una coladera junto al plato de sopa que puede ser fría o caliente. Toma una porción de fideos con los palillos, húndelos en la sopa y disfruta.\nHay una abundante variedad de sopas tsukumen, cada una con su énfasis particular: Acidez, dulzura, rico sabor a mariscos y más.',
    categoria: 'comidas',
    img: '../assets/images/tsukemen.jpg',
    cantidad: 1
  },
  {
    id: 5, 
    nombre: 'Coca-Cola', 
    precio: 25, 
    descripcion: 'Bebida', 
    categoria: 'bebida', 
    img: '../assets/images/coca-cola.jpg', 
    cantidad: 1
  },
  {
    id: 6, 
    nombre: 'Fuze Tea', 
    precio: 20, 
    descripcion: 'Bebida', 
    categoria: 'bebida', 
    img: '../assets/images/fuze-tea.jpg', 
    cantidad: 1
  },
  {
    id: 7, 
    nombre: 'Te de manzanilla', 
    precio: 45, 
    descripcion: 'Bebida', 
    categoria: 'bebida', 
    img: '../assets/images/te-de-manzanilla.jpg', 
    cantidad: 1
  },
  {
    id: 8, 
    nombre: 'Jugo de Naranja', 
    precio: 50, 
    descripcion: 'Bebida', 
    categoria: 'bebida', 
    img: '../assets/images/jugo.jpg', 
    cantidad: 1
  },
  {
    id: 9, 
    nombre: 'Limonada', 
    precio: 50, 
    descripcion: 'Bebida', 
    categoria: 'bebida', 
    img: '../assets/images/limonada.jpg', 
    cantidad: 1
  },
  {
    id: 10,
    nombre: 'Sapporo Ramen',
    precio: 150,
    descripcion: 'La capital de la isla de Hokkaidō, en el norte de Japón es casi un peregrinaje obligado para los amantes del ramen. Es famoso por la variedad de miso -habitualmente akamiso, rojo-, que produce un caldo potente lleno de sabor y aromas. Los fideos acostumbran a ser algo gruesos y entre los toppings más típicos están los brotes de soja salteados, carne de cerdo asada o picada, maíz, bambú o mantequilla.',
    categoria: 'comidas',
    img: '../assets/images/sapporo-ramen.jpg',
    cantidad: 1
  },
  { 
    id: 11,
    nombre: 'Tokyo Ramen',
    precio: 160,
    descripcion: 'Obviamente en la capital japonesa se pueden encontrar infinitas variedades de ramen, pero hay un estilo típico que identifica la ciudad. Normalmente consiste en un caldo de cerdo, pollo y verduras con salsa de soja, alga kombu, bonito seco y katsuobushi. Los fideos suelen ser muy curvos y lo habitual es servirlo con carne de cerdo.',
    categoria: 'comidas',
    img: '../assets/images/tokyo-ramen.jpg',
    cantidad: 1
  },
  { 
    id: 12,
    nombre: 'Hakata Ramen',
    precio: 200,
    descripcion: 'De Fukuoka, prefectura de la isla Kyūshū donde abundan los platos de cerdo. Aquí es típico, obviamente, el Tonkotsu ramen, preparado con un caldo de huesos de cerdo que a veces se cuecen durante días para liberar toda la grasa y el colágeno. Los fideos son finos y el caldo se puede condimentar a veces con miso o salsa de soja. Sésamo, ajo, cerdo, jengibre, takana -hojas de mostaza encurtidas- o alga nori son ingredientes habituales.',
    categoria: 'comidas',
    img: '../assets/images/hakata-ramen.jpg',
    cantidad: 1
  },
  { 
    id: 13,
    nombre: 'Kumamoto Ramen',
    precio: 170,
    descripcion: 'Prefectura de la misma isla, más al sur, que desarrolló su propia variedad de ramen, con un caldo algo más ligero para el que se suele añadir pollo. Los fideos también son lisos pero algo más gruesos, y entre los toppings habituales destacan setas kikurage, repollo, brotes de soja y el ajo. Lo más característico de Kumamoto es el mayu, una especie de salsa espesa negra hecha de ajo tostado con aceite de sésamo.',
    categoria: 'comidas',
    img: '../assets/images/kumanoto-ramen.jpg',
    cantidad: 1
  },
  {
    id: 14,
    nombre: 'Agua de Piña',
    precio: 28,
    descripcion: 'Bebida',
    categoria: 'bebida',
    img: '../assets/images/agua-de-pina.jpg',
    cantidad: 1
  },
  {
    id: 15,
    nombre: 'Agua',
    precio: 10,
    descripcion: 'Bebida',
    categoria: 'bebida',
    img: '../assets/images/agua-natural.jpg',
    cantidad: 1
  },
  {
    id: 16,
    nombre: 'Sprite',
    precio: 20,
    descripcion: 'Bebida',
    categoria: 'bebida',
    img: '../assets/images/sprite.jpg',
    cantidad: 1
  },
  {
    id: 17,
    nombre: 'Akayu Ramen',
    precio: 190,
    descripcion: 'Este peculiar ramen surgió en los años sesenta de la mano de un cocinero local, que tuvo la idea de añadir una bola de pasta de miso rojo a las sobras de una sopa de fideos. Perfeccionó la receta y ahora el ramen de Akayu se distingue por su mezcla de sabores dulces y picantes, ya que el caldo de miso se corona con una pasta de mezcla de soja fermentada, guindilla y ajo que se disuelve en la sopa. Los fideos son gruesos y se suele aderezar con alga aonori en',
    categoria: 'comidas',
    img: '../assets/images/akayu-ramen.jpg',
    cantidad: 1
  },
  {
    id: 18,
    nombre: 'Flan Napolitano',
    precio: 30,
    descripcion: 'Flan',
    categoria: 'postres',
    img: '../assets/images/flan.jpg',
    cantidad: 1
  },
  {
    id: 19,
    nombre: 'Brownie',
    precio: 20,
    descripcion: 'Brownie',
    categoria: 'postres',
    img: '../assets/images/brownie.jpg',
    cantidad: 1
  },
  {
    id: 20,
    nombre: 'Gelatina',
    precio: 25,
    descripcion: 'Geltina',
    categoria: 'postres',
    img: '../assets/images/gelatina.jpg',
    cantidad: 1
  },
];

// =====Ordenamiento de arrays de objetos=====
todo.sort(function (a, b) {
  if (a.nombre > b.nombre) {
    return 1;
  }
  if (a.nombre < b.nombre) {
    return -1;
  }
  return 0;
});
// Termina Ordenamiento de arrays de objetos