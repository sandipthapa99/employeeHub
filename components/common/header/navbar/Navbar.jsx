import React from "react";
import { Text, View } from "react-native";
import { COLORS } from "../../../../constants";
import {
  Attendance,
  AttendanceReport,
  Home,
  LeaveSmall,
  Notification,
  PayslipSmall,
} from "../../../../assets/svgs";

const Navbar = () => {
  const items = [
    {
      id: 1,
      title: "Home",
      icon: <Home />,
    },
    {
      id: 2,
      title: "Payslip",
      icon: <PayslipSmall />,
    },
    {
      id: 3,
      title: "Attendance Report",
      icon: <AttendanceReport />,
    },
    {
      id: 4,
      title: "Leave",
      icon: <LeaveSmall />,
    },
    {
      id: 5,
      title: "Notifications",
      icon: <Notification />,
    },
  ];
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        height: 71,
        width: "100%",
        flexDirection: "row",
      }}
    >
      {items.map((item) => (
        <View
          style={{
            width: 100 / 5 + "%",
            //   backgroundColor: item?.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
          }}
          key={item.id}
        >
          <View>{item.icon}</View>
        </View>
      ))}
    </View>
  );
};

export default Navbar;
