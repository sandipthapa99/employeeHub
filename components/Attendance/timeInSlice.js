import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeInRecords: [],
};

export const timeInSlice = createSlice({
  name: "timeIn",
  initialState,
  reducers: {
    addTime(state, action) {
      state.timeInRecords = [action.payload];
    },
  },
});

export const { addTime } = timeInSlice.actions;
export default timeInSlice.reducer;
