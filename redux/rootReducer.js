import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import offersReducer from "./Offers/OffersReducer";
import categoriesReducer from "./categories/categoriesReducer";
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";
import userSlice from "./user/userSlice";
import OrdersSlice from "./Orders/OrdersSlice";
import recetasReducer from "./recipes/recipesReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart", "user"],
};

const rootReducer = combineReducers({
  ofertas: offersReducer,
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  user: userSlice,
  orders: OrdersSlice,
  recetas: recetasReducer,
});

export default persistReducer(persistConfig, rootReducer);