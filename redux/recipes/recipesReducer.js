import { recipes } from "../../Data/Recipes";

const INITIAL_STATE = {
  recetas: recipes,
};

const recipesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default recipesReducer;