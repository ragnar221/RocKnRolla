import { stockProducts } from "../../Data/Products";

const INITIAL_STATE = {
  ofertas: Array(3)
    .fill(0)
    .reduce((acc, _item) => {
      const IDs = acc.map((value) => value.id);
      let newOfertas;
      do {
        newOfertas = {
          ...stockProducts[Math.floor(Math.random() * stockProducts.length)],
        };
      } while (IDs.includes(newOfertas.id));
      return [...acc, newOfertas];
    }, []),
};

const offersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default offersReducer;