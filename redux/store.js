import { configureStore } from "@reduxjs/toolkit";
import leaveSlice from "../components/Leave/leaveSlice";

export const store = configureStore({
  reducer: {
    leave: leaveSlice,
  },
});
