import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  attendanceRecords: [
    {
      date: "2024-01-01",
      dayType: "Working",
      workedHour: "9hrs",
      in: "08:58 AM",
      out: "18:02 PM",
    },
    {
      date: "2024-01-02",
      dayType: "Working",
      workedHour: "9hrs",
      in: "08:58 AM",
      out: "18:02 PM",
    },
    {
      date: "2024-01-03",
      dayType: "Working",
      workedHour: "9hrs",
      in: "08:58 AM",
      out: "18:02 PM",
    },
    {
      date: "2024-01-04",
      dayType: "Leave",
      workedHour: "",
      in: "",
      out: "",
    },
    {
      date: "2024-01-05",
      dayType: "Working",
      workedHour: "9hrs",
      in: "08:58 AM",
      out: "18:02 PM",
    },
    {
      date: "2024-01-06",
      dayType: "Weekend",
      workedHour: "",
      in: "",
      out: "",
    },
    {
      date: "2024-01-07",
      dayType: "Weekend",
      workedHour: "",
      in: "",
      out: "",
    },
    {
      date: "2023-01-01",
      dayType: "Working",
      workedHour: "9hrs",
      in: "08:58 AM",
      out: "18:02 PM",
    },
    {
      date: "2023-01-02",
      dayType: "Working",
      workedHour: "9hrs",
      in: "08:58 AM",
      out: "18:02 PM",
    },
    {
      date: "2023-01-03",
      dayType: "Working",
      workedHour: "9hrs",
      in: "08:58 AM",
      out: "18:02 PM",
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
