import { configureStore } from "@reduxjs/toolkit";
import leaveSlice from "../components/Leave/leaveSlice";
import attendanceSlice from "../components/Attendance/attendanceSlice";

export const store = configureStore({
  reducer: {
    leave: leaveSlice,
    attendance: attendanceSlice,
  },
});
