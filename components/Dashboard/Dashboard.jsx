import React, { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, icons, images } from "../../constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenHeaderBtn from "../common/header/ScreenHeaderBtn";

import styles from "./dashboard.style";
import { Box, FlatList, Icon, Text } from "native-base";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
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
import { Dropdown, SelectCountry } from "react-native-element-dropdown";

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
  ];
  const date = new Date();
  const data = [
    { label: "KFC", value: "KFC" },
    // { label: "PizzaHut", value: "PizzaHut" },
  ];
  const [value, setValue] = useState(data[0].value);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.headerLeft}
              onPress={() => navigation.navigate("Profile")}
              activeOpacity={0.6}
            >
              <ScreenHeaderBtn iconUrl={images.user} dimension={"100%"} />
              <Text style={styles.username}>John Doe</Text>
            </TouchableOpacity>
            {/* <Text style={styles.headerRight}>KFC</Text> */}
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              itemContainerStyle={styles.itemContainerStyle}
              itemTextStyle={styles.itemTextStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select Organization"
              value={value}
              onChange={(item) => {
                setValue(item.value);
              }}
            />
          </View>
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
                <TouchableOpacity
                  style={{
                    width: 100 / 3 + "%",
                    //   backgroundColor: item?.backgroundColor,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    navigation.navigate(item.title);
                  }}
                  activeOpacity={0.6}
                  key={item.id}
                >
                  <View>{item.icon}</View>
                  <Text mt={2}>{item.title}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={{
                  width: 100 / 3 + "%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <View>
                  <Logout />
                </View>
                <Text mt={2}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <Navbar navigation={navigation} page="Dashboard" />
    </SafeAreaView>
  );
};

export default Dashboard;
