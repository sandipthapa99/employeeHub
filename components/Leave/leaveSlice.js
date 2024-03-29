import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaveApplications: [
    {
      leaveDate: "2023-12-28",
      leaveType: "Annual",
      applyTo: "",
      recommendedBy: "",
      halfDay: "",
      reson: "",
      status: "Pending",
    },
    {
      leaveDate: "2023-12-28",
      leaveType: "Sick",
      applyTo: "",
      recommendedBy: "",
      halfDay: "",
      reson: "",
      status: "Approved",
    },
    {
      leaveDate: "2023-12-28",
      leaveType: "Annual",
      applyTo: "",
      recommendedBy: "",
      halfDay: "",
      reson: "",
      status: "Rejected",
    },
    {
      leaveDate: "2023-12-28",
      leaveType: "Sick",
      applyTo: "",
      recommendedBy: "",
      halfDay: "",
      reson: "",
      status: "Approved",
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
