import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reimbursementList: [
    {
      date: "2023-10-28",
      category: "Cab Fair",
      amount: "123.15",
      status: "Approved",
    },
    {
      date: "2023-11-28",
      category: "Cab Fair",
      amount: "123.15",
      status: "Rejected",
    },
    {
      date: "2023-12-28",
      category: "Team Meet",
      amount: "123.15",
      status: "Pending",
    },
    {
      date: "2023-12-28",
      category: "Team Lunch",
      amount: "100.00",
      status: "Pending",
    },
  ],
  loading: false,
  error: false,
};

export const reimbursementSlice = createSlice({
  name: "reimbursement",
  initialState,
  reducers: {
    applyReimbursement(state, action) {
      state.reimbursementList = [...state.reimbursementList, action.payload];
    },
  },
});

export const { applyReimbursement } = reimbursementSlice.actions;
export default reimbursementSlice.reducer;
