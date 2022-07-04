import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { peopleApi } from "../services/filmsRTK";
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  //The API slice generates a custom middleware - it manages cache lifetimes and expiration.
  middleware: (getDefaultMiddiware) =>
    getDefaultMiddiware().concat(peopleApi.middleware),
});

setupListeners(store.dispatch);