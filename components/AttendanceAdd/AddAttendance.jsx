import { Button, Center, HStack, Icon, Modal, Text } from "native-base";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { COLORS, FONT } from "../../constants";
import CalendarPicker from "react-native-calendar-picker";

import styles from "./addAttendance.style";
import SelectDropdown from "react-native-select-dropdown";
import { MaterialIcons } from "@expo/vector-icons";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { addTime, signInSlice } from "../Attendance/timeInSlice";
// import { addAttendance } from "../Attendance/attendanceSlice";

const AddAttendance = () => {
  const { timeIn } = useSelector((state) => {
    return {
      timeIn: state.timeIn,
    };
  });
  console.log(timeIn.timeInRecords);
  const today = moment();
  const onDateChange = (date) => {};
  const [signIn, setSignIn] = useState(true);
  const [isSignedIn, setissignedIn] = useState(
    timeIn.timeInRecords &&
      timeIn.timeInRecords.length > 0 &&
      timeIn.timeInRecords[0].in
      ? true
      : false
  );
  const [isSignedOut, setissignedOut] = useState(
    timeIn.timeInRecords &&
      timeIn.timeInRecords.length > 0 &&
      timeIn.timeInRecords[0].out
      ? true
      : false
  );
  console.log(timeIn.timeInRecords);
  console.log(isSignedIn);

  const [signInForToday, setSignInForToday] = useState(false);
  const [signOutForToday, setSignOutForToday] = useState(false);
  const attendanceType = ["Time In", "Time Out"];
  const dayTypes = ["Working", "Leave", "Weekend"];
  const Supervisors = [
    "Charlotte Cloe",
    "James Oliver",
    "Jack Sparrow",
    "Amanda Chloe",
    "Henry Cavil",
    "Peter Quill",
  ];
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    date: today.toISOString(),
    dayType: dayTypes[0],
    workedHour: "",
    in: signIn ? moment(today).format("LT") : "",
    out: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (signIn) => {
    if (signIn) {
      !isSignedIn && dispatch(addTime(formData));
    } else {
      !isSignedOut && dispatch(addTime(formData));
    }
  };
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
                    if (selectedItem === "Time In") {
                      setSignIn(true);
                      setFormData({
                        ...formData,
                        in: moment(today).format("LT"),
                      });
                    } else {
                      setSignIn(false);
                      setFormData({
                        ...formData,
                        in: timeIn.timeInRecords[0].in,
                        out: moment(today).format("LT"),
                      });
                    }
                    // setFormData({ ...formData, leaveType: selectedItem });
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
                  onPress={() => {
                    handleSubmit(signIn);
                    setShowModal(true);
                  }}
                  fontFamily={FONT.bold}
                  size={"lg"}
                >
                  SUBMIT
                </Button>
              </View>
            </HStack>
          </View>
        </View>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Body>
              {signIn ? (
                isSignedIn ? (
                  <Center padding={1} paddingTop={10} paddingBottom={20}>
                    <Icon
                      as={<MaterialIcons name="close" />}
                      size={16}
                      mb="8"
                      color="#f00"
                    />
                    <Text style={styles.successModalTitle}>
                      You have already timed in for today.
                    </Text>
                  </Center>
                ) : (
                  <Center padding={1} paddingTop={10} paddingBottom={20}>
                    <Icon
                      as={<MaterialIcons name="check-circle-outline" />}
                      size={16}
                      mb="8"
                      color="#29DF3B"
                    />
                    <Text style={styles.successModalTitle}>
                      Attendance Recorded
                    </Text>

                    <Text>Time in at: {moment(today).format("LT")}</Text>
                  </Center>
                )
              ) : isSignedOut ? (
                <Center padding={1} paddingTop={10} paddingBottom={20}>
                  <Icon
                    as={<MaterialIcons name="close" />}
                    size={16}
                    mb="8"
                    color="#f00"
                  />
                  <Text style={styles.successModalTitle}>
                    You have already timed out for today.
                  </Text>
                </Center>
              ) : (
                <Center padding={1} paddingTop={10} paddingBottom={20}>
                  <Icon
                    as={<MaterialIcons name="check-circle-outline" />}
                    size={16}
                    mb="8"
                    color="#29DF3B"
                  />
                  <Text style={styles.successModalTitle}>
                    Attendance Recorded
                  </Text>

                  <Text>Time in at: {timeIn.timeInRecords[0].in}</Text>
                  <Text>Time out at: {moment(today).format("LT")}</Text>
                </Center>
              )}
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddAttendance;
