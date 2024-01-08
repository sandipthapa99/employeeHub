import React, { useState } from "react";
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

const Navbar = ({ navigation }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Home");

  const items = [
    {
      id: 1,
      title: "Home",
      icon: (
        <Home stroke={activeTab === "Home" ? COLORS.textPrimary : "#fff"} />
      ),
    },
    {
      id: 2,
      title: "Payslip",
      icon: (
        <PayslipSmall
          stroke={activeTab === "Payslip" ? COLORS.textPrimary : "#fff"}
        />
      ),
    },
    {
      id: 3,
      title: "Attendance Report",
      icon: (
        <AttendanceReport
          stroke={
            activeTab === "Attendance Report" ? COLORS.textPrimary : "#fff"
          }
        />
      ),
    },
    {
      id: 4,
      title: "Leave",
      icon: (
        <LeaveSmall
          stroke={activeTab === "Leave" ? COLORS.textPrimary : "#fff"}
        />
      ),
    },
    {
      id: 5,
      title: "Notifications",
      icon: (
        <Notification
          stroke={activeTab === "Notifications" ? COLORS.textPrimary : "#fff"}
        />
      ),
    },
  ];
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <View style={styles.grid} key={item.id}>
          <TouchableOpacity
            style={styles.iconContainer(activeTab, item.title)}
            onPress={() => {
              setActiveTab(item.title);
              navigation.navigate("Profile");
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
