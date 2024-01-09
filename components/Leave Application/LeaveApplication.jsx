import {
  Button,
  Checkbox,
  FormControl,
  HStack,
  Icon,
  Input,
  Modal,
  Text,
  TextArea,
  View,
} from "native-base";
import React, { useState } from "react";
import styles from "./leaveApplication.style";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { COLORS, FONT } from "../../constants";
import { MaterialIcons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { useDispatch } from "react-redux";
import { applyLeave } from "../Leave/leaveSlice";
import Toast from "react-native-toast-message";
import { showToast } from "../../utils";

const LeaveApplication = ({ navigation }) => {
  const today = moment();
  const [showModal, setShowModal] = useState(false);

  const [selectedDate, setSelectedDate] = useState(today);
  const [choosedDate, setChoosedDate] = useState();
  var leaveDate = moment(selectedDate).format("YYYY-MM-DD dddd");

  const leaveTypes = ["Annual", "Compensation", "Sick Leave"];
  const Supervisors = [
    "Charlotte Cloe",
    "James Oliver",
    "Jack Sparrow",
    "Amanda Chloe",
    "Henry Cavil",
    "Peter Quill",
  ];
  const [formData, setFormData] = useState({
    leaveDate: selectedDate.toISOString(),
    leaveType: leaveTypes[0],
    applyTo: Supervisors[0],
    recommendedBy: Supervisors[0],
    halfDay: false,
    reason: "",
    status: "Pending",
  });
  const onDateChange = (date) => {
    setChoosedDate(date);
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(applyLeave(formData));
    showToast(
      "success",
      "Success",
      "Leave application has been submitted successfully!"
    );
    navigation.navigate("Leave");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View style={styles.container}>
        <View style={styles.formWrapper}>
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            activeOpacity={0.6}
          >
            <HStack justifyContent="space-between">
              <View style={styles.date}>
                <Icon
                  as={<MaterialIcons name="today" />}
                  size={5}
                  color="muted.800"
                />
                <Text ml={2} style={styles.date}>
                  {leaveDate}
                </Text>
              </View>

              <Icon
                as={<MaterialIcons name="add-circle-outline" />}
                size={5}
                ml="2"
                color="muted.800"
              />
            </HStack>
          </TouchableOpacity>

          <HStack space={[2, 3]} justifyContent="space-between">
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Leave Type:
            </Text>
            <SelectDropdown
              data={leaveTypes}
              onSelect={(selectedItem, index) => {
                setFormData({ ...formData, leaveType: selectedItem });
              }}
              defaultButtonText={leaveTypes[0]}
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
          <HStack space={[2, 3]} justifyContent="space-between" mt={3}>
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Apply To:
            </Text>
            <SelectDropdown
              data={Supervisors}
              onSelect={(selectedItem, index) => {
                setFormData({ ...formData, applyTo: selectedItem });
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
            {/* <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Status
            </Text> */}
          </HStack>
          <HStack space={[2, 3]} justifyContent="space-between" mt={3}>
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Recommended By:
            </Text>
            <SelectDropdown
              data={Supervisors}
              onSelect={(selectedItem, index) => {
                setFormData({ ...formData, recommendedBy: selectedItem });
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
            {/* <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Status
            </Text> */}
          </HStack>
          <HStack space={[2, 3]} justifyContent="space-between" mt={3}>
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Half Day:
            </Text>
            <Checkbox
              value="test"
              accessibilityLabel="This is a dummy checkbox"
              aria-label="checkbox"
              marginRight={3}
              onChange={(value) => setFormData({ ...formData, halfDay: value })}
            />
          </HStack>
          <View style={{ marginTop: 3 }}>
            <Text>Reason:</Text>
            <TextArea
              w={"95%"}
              h={20}
              placeholder="Please specify the reason..."
              onChangeText={(text) =>
                setFormData({ ...formData, reason: text })
              }
            />
          </View>
        </View>
        <Button
          mt={16}
          onPress={() => {
            handleSubmit();
          }}
          fontFamily={FONT.bold}
        >
          SUBMIT
        </Button>
      </View>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        size={"full"}
      >
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Select Date</Modal.Header>
          <Modal.Body>
            <View>
              <CalendarPicker
                onDateChange={onDateChange}
                textStyle={{ fontFamily: FONT.medium }}
                todayBackgroundColor="#1f2937"
                selectedDayTextColor="#fff"
                selectedDayStyle={{ backgroundColor: COLORS.primary }}
                minDate={today}
              />
            </View>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                  setSelectedDate(choosedDate);
                }}
              >
                Confirm
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </SafeAreaView>
  );
};

export default LeaveApplication;
