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
import SelectDropdown from "react-native-select-dropdown";

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
      hasPage: true,
    },
    {
      id: 2,
      title: "Late/Early",
      icon: <LateEarly />,
      hasPage: false,
    },
    {
      id: 3,
      title: "Birthday",
      icon: <Birthday />,
      hasPage: false,
    },
    {
      id: 4,
      title: "Payslip",
      icon: <Payslip />,
      hasPage: true,
    },
    {
      id: 5,
      title: "Leave",
      icon: <Leave />,
      hasPage: true,
    },
    {
      id: 6,
      title: "Employees",
      icon: <Employees />,
      hasPage: false,
    },
    {
      id: 7,
      title: "Settings",
      icon: <Settings />,
      hasPage: false,
    },
    {
      id: 8,
      title: "Reimbursement",
      icon: <Reimbursment />,
      hasPage: true,
    },
  ];
  const date = new Date();
  const data = ["ABC Organization"];
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
              <Text style={styles.username}>Olaiza Edades</Text>
            </TouchableOpacity>
            {/* <Text style={styles.headerRight}>KFC</Text> */}
            <SelectDropdown
              data={data}
              onSelect={(selectedItem, index) => {
                //   setFormData({ ...formData, leaveType: selectedItem });
              }}
              defaultButtonText={data[0]}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <MaterialIcons
                    name={isOpened ? "expand-less" : "expand-more"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
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
                    item.hasPage && navigation.navigate(item.title);
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
