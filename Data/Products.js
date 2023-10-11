export let stockProducts = [];

let product = class {
  constructor(name, id, price, img, category, prodNumber, info, sale) {
    this.name = name;
    this.id = id;
    this.price = price;
    this.img = img;
    this.category = category;
    this.info = info;
    this.prodNumber = prodNumber;
    this.sale = sale;
  }
};

let createAddProduct = (
  name,
  id,
  price,
  img,
  category,
  prodNumber,
  info,
  sale
) => {
  return stockProducts.push(
    new product(name, id, price, img, category, prodNumber, info, sale)
  );
};
const idRandom = () => {
  let randomId = parseInt(Math.random() * 1000);
  if (stockProducts.some((product) => product.id === randomId)) {
    randomId = parseInt(Math.random() * 1000);
  }
  return randomId;
};

createAddProduct(
  "Modelo Biker",
  idRandom(),
  52000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826561/classic-leather-mens-motorcycle-jacket-the-alley-chicago_mtfumf.webp",
  "chamarras",
  1,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo 80s (M)",
  idRandom(),
  55000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826534/80s-m_urxai9.jpg",
  "chamarras",
  2,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Bane",
  idRandom(),
  60000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826561/bane_y9ilro.jpg",
  "sobretodos",
  3,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Comrade",
  idRandom(),
  70000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826590/comrade_ho690d.jpg",
  "sacos",
  4,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Contrast",
  idRandom(),
  75000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826590/constrast_os5g6u.webp",
  "chamarras",
  5,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Dante",
  idRandom(),
  620000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826591/dante_kw8yne.jpg",
  "sobredotos",
  6,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Gambler",
  idRandom(),
  42000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826591/gambler_lqptvo.jpg",
  "chamarras",
  7,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Giovanni",
  idRandom(),
  58000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826591/giovanni_lxzagk.jpg",
  "sacos",
  8,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Jacob",
  idRandom(),
  85000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826591/jacob_v9m8zc.webp",
  "sobretodos",
  9,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo K-Dash",
  idRandom(),
  63000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826592/k-dash_tzehih.webp",
  "chamarras",
  10,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Leon",
  idRandom(),
  61000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826592/leon_l4xji7.jpg",
  "chamarras",
  11,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Lilith",
  idRandom(),
  84000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826592/lilith_iu57bx.jpg",
  "sobretodos",
  12,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Logan",
  idRandom(),
  57000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826592/logan_qhumta.jpg",
  "chamarras",
  13,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Midnight",
  idRandom(),
  74000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826593/midnight_fyqugm.jpg",
  "sacos",
  14,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Neo",
  idRandom(),
  80000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826593/neo_axkhwo.webp",
  "sobretodos",
  15,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Old Glory",
  idRandom(),
  78000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826593/old-glory_enceum.avif",
  "sobretodos",
  16,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Racer",
  idRandom(),
  54000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826594/racer_fiioos.jpg",
  "chamarras",
  17,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Ravager",
  idRandom(),
  79000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826594/ravager_vce32x.jpg",
  "sacos",
  18,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Stealth",
  idRandom(),
  56000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826594/stealth_krgtvv.jpg",
  "chamarras",
  19,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Triller",
  idRandom(),
  57000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826594/thriller_iesa8m.jpg",
  "chamarras",
  20,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Toreador",
  idRandom(),
  84000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826595/toreador_saiivt.jpg",
  "sobretodos",
  21,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Tremere",
  idRandom(),
  81000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826595/tremere_ojfup7.jpg",
  "sobretodos",
  22,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Tyler",
  idRandom(),
  54000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826595/tyler_g5tt3d.jpg",
  "chamarras",
  23,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Vector",
  idRandom(),
  65000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826596/vector_e31wb8.webp",
  "sacos",
  24,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Urban",
  idRandom(),
  63000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826596/urban_ck4onk.jpg",
  "chamarras",
  25,
  "SALE 20% OFF!"
);
createAddProduct(
  "Modelo Wild",
  idRandom(),
  79000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826596/wilderness_z3mdxj.jpg",
  "sacos",
  26,
  "SALE 20% OFF!"
);

createAddProduct(
  "Modelo Artic",
  idRandom(),
  57000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696826560/artic_ppskal.webp",
  27,
  "SALE 20% OFF!"
);
createAddProduct(
  "Cinto Classic",
  idRandom(),
  23000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1697053971/belt1_zog1wr.jpg",
  28,
  "SALE 20% OFF"
);

createAddProduct(
  "Cinto Cougar",
  idRandom(),
  28000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1697053973/cougar_lp3zwr.webp",
  "accesorios",
  29,
  "SALE 20% OFF"
);

createAddProduct(
  "Cinto Thor",
  idRandom(),
  26000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1697053975/thor_r9usfi.jpg",
  "accesorios",
  30,
  "SALE 20% OFF!"
);

createAddProduct(
  "Botas Brando",
  idRandom(),
  36000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1697053972/brando_jvfahv.webp",
  "accesorios",
  31,
  "SALE 20% OFF!"
);

createAddProduct(
  "Botas Venture",
  idRandom(),
  38000,
  "https://res.cloudinary.com/dfpp4mriw/image/upload/v1697053976/venture_itqjkh.webp",
  "accesorios",
  32,
  "SALE 20% OFF!"
);

export const TotalProducts = stockProducts.length;

export const Products = stockProducts.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category] = [...acc[product.category], product];
  return acc;
}, {});