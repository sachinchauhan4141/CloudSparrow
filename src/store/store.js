import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobSlice from "./jobSlice";
import enquirySlice from "./enquirySlice";

const store = configureStore({
  reducer: {
    authSlice,
    jobSlice,
    enquirySlice,
  },
});

export default store;
