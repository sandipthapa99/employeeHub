import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { COLORS, icons, images } from "../../constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenHeaderBtn from "../common/header/ScreenHeaderBtn";

import styles from "./dashboard.style";
import { Box, FlatList, Icon, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Attendance,
  Birthday,
  Employees,
  LateEarly,
  Leave,
  Payslip,
  Reimbursment,
  Logout,
  Settings,
} from "../../assets/svgs";
import Navbar from "../common/header/navbar/Navbar";

const Dashboard = ({ navigation }) => {
  const { width } = Dimensions.get("window");
  const gap = 12;
  const itemPerRow = 3;
  const totalGapSize = (itemPerRow - 1) * gap;
  const windowWidth = width;
  const childWidth = (windowWidth - totalGapSize) / itemPerRow;

  const items = [
    {
      id: 1,
      title: "Attendance",
      icon: <Attendance />,
    },
    {
      id: 2,
      title: "Late/Early",
      icon: <LateEarly />,
    },
    {
      id: 3,
      title: "Birthday",
      icon: <Birthday />,
    },
    {
      id: 4,
      title: "Payslip",
      icon: <Payslip />,
    },
    {
      id: 5,
      title: "Leave",
      icon: <Leave />,
    },
    {
      id: 6,
      title: "Employees",
      icon: <Employees />,
    },
    {
      id: 7,
      title: "Settings",
      icon: <Settings />,
    },
    {
      id: 8,
      title: "Reimbursement",
      icon: <Reimbursment />,
    },
    {
      id: 9,
      title: "Logout",
      icon: <Logout />,
    },
  ];
  const date = new Date();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.upperDash}>
            <View style={styles.today}>
              <Icon
                as={<MaterialIcons name="today" />}
                size={5}
                ml="2"
                color="muted.400"
              />
              <Text ml={2} style={styles.date}>
                {date.toDateString()}
              </Text>
            </View>
            <View style={styles.statsContainer}>
              <View style={styles.stat}>
                <Text style={styles.statNum} fontSize={24} color={"#FF380D"}>
                  3
                </Text>
                <Text fontSize={14} color={COLORS.textPrimary}>
                  Leave
                </Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNum} fontSize={24} color={"#FF9900"}>
                  3
                </Text>
                <Text fontSize={14} color={COLORS.textPrimary}>
                  Late
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.lowerDash}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                flexWrap: "wrap",
                rowGap: 24,
              }}
            >
              {items.map((item) => (
                <View
                  style={{
                    width: 100 / 3 + "%",
                    //   backgroundColor: item?.backgroundColor,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={item.id}
                >
                  <View>{item.icon}</View>
                  <Text>{item.title}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <Navbar navigation={navigation} page="Dashboard" />
    </SafeAreaView>
  );
};

export default Dashboard;
