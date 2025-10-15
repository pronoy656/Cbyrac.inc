// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
});
