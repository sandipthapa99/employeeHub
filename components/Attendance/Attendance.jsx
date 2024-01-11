import { Box, Button, HStack, Icon, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import Navbar from "../common/header/navbar/Navbar";

import styles from "./attendance.style";
import { COLORS, FONT } from "../../constants";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import moment from "moment";
import SelectDropdown from "react-native-select-dropdown";
const Attendance = ({ navigation }) => {
  const { attendance } = useSelector((state) => {
    return {
      attendance: state.attendance,
    };
  });
  const reversedData = attendance.attendanceRecords.slice(0).reverse();
  const years = ["2024", "2023"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const filterData = (data, year, month) => {
    const res = data.filter(
      (item) =>
        moment(item.date).format("LL").includes(year) &&
        moment(item.date).format("LL").includes(month)
    );
    return res;
  };
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const initialData = filterData(
    attendance.attendanceRecords,
    selectedYear,
    selectedMonth
  );
  const [filteredData, setFilteredData] = useState(initialData);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.upperDash}>
            <HStack
              justifyContent="space-between"
              paddingX={6}
              style={{ alignItems: "center" }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Icon
                  as={<MaterialIcons name="today" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
                <SelectDropdown
                  data={years}
                  onSelect={(selectedItem, index) => {
                    setSelectedYear(selectedItem);
                  }}
                  defaultButtonText={years[0]}
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
              <SelectDropdown
                data={months}
                onSelect={(selectedItem, index) => {
                  setSelectedMonth(selectedItem);
                }}
                defaultButtonText={months[0]}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown2BtnStyle}
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
              <Button
                onPress={() => {
                  const data = filterData(
                    attendance.attendanceRecords,
                    selectedYear,
                    selectedMonth
                  );
                  setFilteredData(data);
                }}
                size={"sm"}
              >
                View
              </Button>
            </HStack>
          </View>
          <HStack
            space={[2, 3]}
            justifyContent="space-between"
            mt={6}
            paddingX={6}
          >
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular} mr={6}>
              Date
            </Text>
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Day type
            </Text>
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Worked Hour
            </Text>
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              In
            </Text>
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Out
            </Text>
          </HStack>
          <View style={styles.listContainer}>
            {filteredData && filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <Box
                  borderBottomWidth="1"
                  borderColor={COLORS.lightWhite}
                  py="2"
                  key={index}
                >
                  <HStack
                    space={[2, 3]}
                    justifyContent="space-between"
                    paddingX={4}
                  >
                    <Text
                      color={COLORS.textPrimary}
                      fontFamily={FONT.regular}
                      fontSize={12}
                    >
                      {moment(item.date).format("DD/MM/YYYY")}
                    </Text>
                    <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
                      {!item.dayType == "" ? item.dayType : "-"}
                    </Text>
                    <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
                      {!item.workedHour == "" ? item.workedHour : "-"}
                    </Text>
                    <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
                      {item.in !== "" ? item.in : "-"}
                    </Text>
                    <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
                      {!item.out == "" ? item.out : "-"}
                    </Text>
                  </HStack>
                </Box>
              ))
            ) : (
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: FONT.medium,
                  paddingVertical: 24,
                }}
              >
                No Data Available for selected Date
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.requestBtn}
        onPress={() => navigation.navigate("addAttendance")}
        activeOpacity={0.6}
      >
        <Icon as={<MaterialIcons name="add" />} size={5} mr="2" color="white" />
        <Text style={styles.requestText}>New Attendance</Text>
      </TouchableOpacity>
      <Navbar navigation={navigation} page={"Attendance"} />
    </SafeAreaView>
  );
};

export default Attendance;
