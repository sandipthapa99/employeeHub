import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  attendanceRecords: [
    {
      date: "2024-12-12",
      dayType: "Working",
      workedHour: "9hrs",
      in: "08:58",
      out: "18:02",
    },
    {
      date: "2024-12-12",
      dayType: "Working",
      workedHour: "9hrs",
      in: "08:58",
      out: "18:02",
    },
    {
      date: "2024-12-12",
      dayType: "Working",
      workedHour: "9hrs",
      in: "08:58",
      out: "18:02",
    },
    {
      date: "2024-12-12",
      dayType: "Working",
      workedHour: "9hrs",
      in: "08:58",
      out: "18:02",
    },
    {
      date: "2024-12-12",
      dayType: "Working",
      workedHour: "9hrs",
      in: "08:58",
      out: "18:02",
    },
  ],
  loading: false,
  error: false,
};

export const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    addAttendance(state, action) {
      state.attendanceRecords = [...state.attendanceRecords, action.payload];
    },
  },
});

export const { addAttendance } = attendanceSlice.actions;
export default attendanceSlice.reducer;
