import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../../constants";
import {
  Attendance,
  AttendanceReport,
  Home,
  LeaveSmall,
  Notification,
  PayslipSmall,
} from "../../../../assets/svgs";

import styles from "./navbar.style";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";

const Navbar = ({ navigation, page }) => {
  const route = useRoute();

  const items = [
    {
      id: 1,
      title: "Dashboard",
      icon: (
        <Home stroke={page === "Dashboard" ? COLORS.textPrimary : "#fff"} />
      ),
    },
    {
      id: 2,
      title: "Payslip",
      icon: (
        <PayslipSmall
          stroke={page === "Payslip" ? COLORS.textPrimary : "#fff"}
        />
      ),
    },
    {
      id: 3,
      title: "Attendance",
      icon: (
        <AttendanceReport
          stroke={page === "Attendance" ? COLORS.textPrimary : "#fff"}
        />
      ),
    },
    {
      id: 4,
      title: "Leave",
      icon: (
        <Notification stroke={page === "Leave" ? COLORS.textPrimary : "#fff"} />
      ),
    },
    // {
    //   id: 5,
    //   title: "Notifications",
    //   icon: (
    //     <LeaveSmall
    //       stroke={page === "Notifications" ? COLORS.textPrimary : "#fff"}
    //     />
    //   ),
    // },
  ];
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <View style={styles.grid} key={item.id}>
          <TouchableOpacity
            style={styles.iconContainer(page, item.title)}
            onPress={() => {
              navigation.navigate(item.title);
            }}
          >
            <View>{item.icon}</View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Navbar;
