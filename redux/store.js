
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import offersReducer from "./Offers/OffersReducer";
import categoriesReducer from "./categories/categoriesReducer";
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";
import userSlice from "./user/userSlice";
import OrdersSlice from "./Orders/OrdersSlice";
import recipesReducer from "./recipes/recipesReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";


const rootReducer = combineReducers({
  ofertas: offersReducer,
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  user: userSlice,
  orders: OrdersSlice,
  recetas: recipesReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

const initialState = {};
const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore( {
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
    serializableCheck: false
  }) 
}
  
);

export const persistor = persistStore(store);