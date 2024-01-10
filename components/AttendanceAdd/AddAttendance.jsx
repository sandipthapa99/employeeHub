import { Button, HStack, Text } from "native-base";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { COLORS, FONT } from "../../constants";
import CalendarPicker from "react-native-calendar-picker";

import styles from "./addAttendance.style";
import SelectDropdown from "react-native-select-dropdown";
import { MaterialIcons } from "@expo/vector-icons";

const AddAttendance = () => {
  const onDateChange = (date) => {};
  const data = ["1", "2"];
  const attendanceType = ["Sign In", "Sign Out"];
  const Supervisors = [
    "Charlotte Cloe",
    "James Oliver",
    "Jack Sparrow",
    "Amanda Chloe",
    "Henry Cavil",
    "Peter Quill",
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.upperDash}>
            <CalendarPicker
              onDateChange={onDateChange}
              textStyle={{ fontFamily: FONT.medium }}
              todayBackgroundColor={COLORS.primary}
              selectedDayTextColor={COLORS.white}
              enableDateChange={false}
              width={355}
            />
          </View>
          <View style={styles.lowerDash}>
            <Text>Submit your attendance:</Text>
            <HStack space={[2, 3]} justifyContent="space-between" mt={3}>
              <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
                Submit To:
              </Text>
              <SelectDropdown
                data={Supervisors}
                onSelect={(selectedItem, index) => {
                  //   setFormData({ ...formData, leaveType: selectedItem });
                }}
                defaultButtonText={Supervisors[0]}
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
            </HStack>
            <HStack space={[2, 3]} mt={4}>
              <View style={{ flex: 2 }}>
                <SelectDropdown
                  data={attendanceType}
                  onSelect={(selectedItem, index) => {
                    //   setFormData({ ...formData, leaveType: selectedItem });
                  }}
                  defaultButtonText={attendanceType[0]}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                  buttonStyle={styles.dropdown2BtnStyle}
                  buttonTextStyle={styles.dropdown2BtnTxtStyle}
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
                  dropdownStyle={styles.dropdown2DropdownStyle}
                  rowStyle={styles.dropdown2RowStyle}
                  rowTextStyle={styles.dropdown2RowTxtStyle}
                />
              </View>
              <View style={{ flex: 1, position: "relative" }}>
                <Button
                  // mt={16}
                  onPress={() => {}}
                  fontFamily={FONT.bold}
                  size={"lg"}
                >
                  SUBMIT
                </Button>
              </View>
            </HStack>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddAttendance;
