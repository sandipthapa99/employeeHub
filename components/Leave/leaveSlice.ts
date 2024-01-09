import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaveApplications: [
    {
      leaveDate: "28-12-2023",
      leaveType: "Annual",
      applyTo: "",
      recommendedBy: "",
      halfDay: "",
      reson: "",
      status: "Pending",
    },
  ],
  loading: false,
  error: false,
};

export const leaveSlice = createSlice({
  name: "leave",
  initialState,
  reducers: {
    applyLeave(state, action) {
      state.leaveApplications = [...state.leaveApplications, action.payload];
    },
  },
});

export const { applyLeave } = leaveSlice.actions;
export default leaveSlice.reducer;
