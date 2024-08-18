import homeReducer from "../slice/homeSlice";
import socialReducer from "../slice/connectSocial";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  counter: homeReducer,
  social: socialReducer,
});
export const store = configureStore({
  reducer: reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
