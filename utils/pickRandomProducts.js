import { Products } from "../Data/Products";

export const pickRandomProducts = (cantidad) => {
  const nuevoArray = [];

  while (nuevoArray.length < cantidad) {
    const indexRandom = Math.floor(Math.random() * Products.length);

    if (!nuevoArray.length) {
      nuevoArray.push(Products[indexRandom]);
    }

    const productoExistente = nuevoArray.find((newProduct) => {
      return newProduct.id === Products[indexRandom].id;
    });

    if (!productoExistente) {
      nuevoArray.push(Products[indexRandom]);
    }
    
  }

  return nuevoArray;
};