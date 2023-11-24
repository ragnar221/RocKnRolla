
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";




const initialState = {};
const middleware = [thunk];

export const store = configureStore( {
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
    serializableCheck: false
  }) 
}
  
);

export const persistor = persistStore(store);