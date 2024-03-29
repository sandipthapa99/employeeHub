import { configureStore } from "@reduxjs/toolkit";
import leaveSlice from "../components/Leave/leaveSlice";
import attendanceSlice from "../components/Attendance/attendanceSlice";
import reimbursementSlice from "../components/Reimbursement/reimbursementSlice";
import payslipSlice from "../components/Payslip/payslipSlice";
import timeInSlice from "../components/Attendance/timeInSlice";

export const store = configureStore({
  reducer: {
    leave: leaveSlice,
    attendance: attendanceSlice,
    reimbursement: reimbursementSlice,
    payslip: payslipSlice,
    timeIn: timeInSlice,
  },
});
