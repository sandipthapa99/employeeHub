import React, { useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "./addReimbursement.style";
import { COLORS, FONT } from "../../constants";
import moment from "moment";
import { useDispatch } from "react-redux";
import { applyLeave } from "../Leave/leaveSlice";
import { Button, FormControl, HStack, Icon, TextArea, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";

const AddReimbursement = () => {
  const today = moment();
  const [showModal, setShowModal] = useState(false);

  const [selectedDate, setSelectedDate] = useState(today);
  const [choosedDate, setChoosedDate] = useState(today);
  const [errors, setErrors] = useState({});

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
    leaveDate: choosedDate.toISOString(),
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
    //   navigation.navigate("Leave");
  };
  const validate = () => {
    if (formData.reason == "") {
      setErrors({ ...errors, reason: "Reason is required" });
      return false;
    }
    return true;
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView>
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

            <HStack space={[2, 3]} justifyContent="space-between" mt={2}>
              <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
                Reimbursement Type:
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
            <View style={{ marginTop: 3 }}>
              <Text>Description:</Text>
              <FormControl isRequired isInvalid={"reason" in errors}>
                <TextArea
                  w={"95%"}
                  h={20}
                  placeholder="Description..."
                  onChangeText={(text) =>
                    setFormData({ ...formData, reason: text })
                  }
                />
                {"reason" in errors ? (
                  <FormControl.ErrorMessage>
                    Please specify the reason!
                  </FormControl.ErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
            </View>
          </View>
          <Button
            mt={16}
            onPress={() => {
              validate() ? handleSubmit() : console.log("Validation Failed");
            }}
            fontFamily={FONT.bold}
          >
            SUBMIT
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddReimbursement;
