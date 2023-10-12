export let recipes = [];
let receta = class {
  constructor(name, id, description, info, img, recetaNumber, productos) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.img = img;
    this.info = info;
    this.recetaNumber = recetaNumber;
    this.productos = productos;
  }
};
let createAddRecipe = (
  name,
  id,
  description,
  info,
  img,
  recetaNumber,
  productos
) => {
  return recipes.push(
    new receta(name, id, description, info, img, recetaNumber, productos)
  );
};
const idRandom = () => {
  let randomId = parseInt(Math.random() * 1000);
  if (recipes.some((product) => product.id === randomId)) {
    randomId = parseInt(Math.random() * 1000);
  }
  return randomId;
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

createAddRecipe(
  "K-Dash",
  idRandom(),
  "El Modelo K-Dash fue un pedido realizado para una excibicion de cosplay. el modelo esta basado en la prenda que lleva el personaje 'k' de la serie de videojuegos 'The king of fighters'",
  "un diseño simple pero unico. con un cuello tipo mao, entallada al cuerpo y con unas cintas a modo ornamental en el brazo derecho que le dan un toque unico.",
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826592/k-dash_tzehih.webp",
  random(0, 2),
  [
    "Realizado el 13 de marzo de 2012"
  ]
);
createAddRecipe(
  "Bane",
  idRandom(),
  "Este modelo esta basado en el iconico personaje Bane de la pelicula 'Batman, el caballero oscuro asciende' y fue realizado a pedido ",
  "un modelo unico de tipo camperon (casi un sobretodo) con forro de corderito, cuello amplio y cuero grueso. ideal para dias frios",
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826561/bane_y9ilro.jpg",
  random(0, 2)
  [
    "Realizado el 5 de mayo de 2019"
  ]
);
createAddRecipe(
  "Dante",
  idRandom(),
  "uno de nuestros primeros pedidos.Sobretodo inspirado en el personaje de la famosa saga de videojuegos 'Devil may cry', Dante",
  "Sobretodo bastante comodo y con interior totalmente forrado en rojo lo que le da un contraste soberbio. tambien presenta detalles en el mismo color en las mangas",
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826591/dante_kw8yne.jpg",
  random(0, 2),
  [
   "Realizado el 26 de noviembre de 2009"
  ]
);
createAddRecipe(
  "Thriller",
  idRandom(),
  "Un trabajo desafiante pero muy divertido fue esta chaqueta basada en la utilizada por el mundialmente reconocido Michael Jackson en el videoclip de su icónica cancion 'Thriller'",
  "Un diseño inconfundible. con unas cintas negras a modo de Hombreras y tambien en la cintura y mangas. costura de diseño en los hombros y cubierta para el cierre dividida en 3 secciones",
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826594/thriller_iesa8m.jpg",
  2,
  [
    "Realizado el 15 de julio de 2014"
  ]
);
createAddRecipe(
  "Lilith",
  idRandom(),
  "Un diseño unico realido para un desfile de moda gotica siguiendo estrictamente las instrucciones de la diseñadora y modelo",
  "sobretodo de tipo largo con cierre ligeramente hacia la izquierda y cintas con botones que le dan un toque magistral.se utilizo un cuero ligero que lo le da un peso liviano y comodo",
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826592/lilith_iu57bx.jpg",
  random(0, 2),
  [
    "Realizado el 4 de agosto del 2006"
  ]
);
createAddRecipe(
  "Jacob",
  idRandom(),
  "Un sobretodo de corte Victoriano con capucha inspirado en el utilizado por Jacob Frie, coprotagonista de 'Assassins creed Syndicate'",
  "cuero grueso y reforzado. con costuras de diseño en las solapas del cuello, una capucha amplia y un cinturon para ajustar la cintura",
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826591/jacob_v9m8zc.webp",
  1,
  [
    "Realizado el 24 de septiembre de 2014"
  ]
);

export const TotalRecetas = recipes.length;