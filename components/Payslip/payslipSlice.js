import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payslipData: [
    {
      date: "January 2024",
      basic: 3000,
      hra: 500,
      allowances: 200,
      pf: 100,
      incomeTax: 100,
      insurance: 50,
    },
    {
      date: "December 2023",
      basic: 3000,
      hra: 500,
      allowances: 300,
      pf: 100,
      incomeTax: 100,
      insurance: 40,
    },
    {
      date: "November 2023",
      basic: 3000,
      hra: 500,
      allowances: 500,
      pf: 100,
      incomeTax: 100,
      insurance: 60,
    },
  ],
  loading: false,
  error: false,
};

export const payslipSlice = createSlice({
  name: "payslip",
  initialState,
  reducers: {
    addPayslip(state, action) {
      state.payslip = [...state.payslip, action.payload];
    },
  },
});

export const { addPayslip } = payslipSlice.actions;
export default payslipSlice.reducer;
