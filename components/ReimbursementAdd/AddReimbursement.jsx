import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./addReimbursement.style";
import { COLORS, FONT } from "../../constants";
import moment from "moment";
import { useDispatch } from "react-redux";
import { applyLeave } from "../Leave/leaveSlice";
import {
  Button,
  FormControl,
  HStack,
  Icon,
  TextArea,
  Text,
  IconButton,
  Input,
  Modal,
  VStack,
  Center,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { showToast } from "../../utils";
import { applyReimbursement } from "../Reimbursement/reimbursementSlice";
import * as ImagePicker from "expo-image-picker";

const AddReimbursement = ({ navigation }) => {
  const today = moment();
  const [showModal, setShowModal] = useState(false);
  const [showImgModal, setShowImgModal] = useState(false);

  const [selectedDate, setSelectedDate] = useState(today);
  const [choosedDate, setChoosedDate] = useState(today);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  var leaveDate = moment(selectedDate).format("YYYY-MM-DD dddd");

  const reimbursementTypes = [
    "Team Lunch",
    "Cab Fair",
    "Client Meet",
    "Others",
  ];
  const Supervisors = [
    "Charlotte Cloe",
    "James Oliver",
    "Jack Sparrow",
    "Amanda Chloe",
    "Henry Cavil",
    "Peter Quill",
  ];
  const [formData, setFormData] = useState({
    date: choosedDate.toISOString(),
    reimbursementType: reimbursementTypes[0],
    applyTo: Supervisors[0],
    recommendedBy: Supervisors[0],
    amount: "",
    description: "",
    status: "Pending",
  });

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(applyReimbursement(formData));
    showToast(
      "success",
      "Success",
      "Leave application has been submitted successfully!"
    );
    navigation.navigate("Reimbursement");
  };
  const validate = () => {
    console.log(formData);
    if (formData.amount == "") {
      setErrors({ ...errors, amount: "Amount is required" });
      return false;
    } else if (formData.description == "") {
      setErrors({ ...errors, description: "Description is required" });
      return false;
    } else if (!image) {
      setErrors({ ...errors, image: "Image is required" });
      return false;
    }
    return true;
  };

  const clickImage = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.formWrapper}>
            <HStack space={[2, 3]} justifyContent="space-between" mt={2}>
              <Text color={COLORS.textPrimary} fontFamily={FONT.medium}>
                Reimbursement Type:
              </Text>
              <SelectDropdown
                data={reimbursementTypes}
                onSelect={(selectedItem, index) => {
                  setFormData({
                    ...formData,
                    reimbursementType: selectedItem,
                  });
                }}
                defaultButtonText={reimbursementTypes[0]}
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
              <Text color={COLORS.textPrimary} fontFamily={FONT.medium}>
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
              {/* <Text color={COLORS.textPrimary} fontFamily={FONT.medium}>
              Status
            </Text> */}
            </HStack>
            <HStack space={[2, 3]} justifyContent="space-between" mt={3}>
              <Text color={COLORS.textPrimary} fontFamily={FONT.medium}>
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
            <View style={{ marginTop: 4 }}>
              <FormControl isRequired isInvalid={"amount" in errors}>
                <FormControl.Label style={{ fontFamily: FONT.bold }}>
                  <Text fontFamily={FONT.medium}>Amount:</Text>
                </FormControl.Label>
                <Input
                  variant="outline"
                  placeholder="Amount"
                  keyboardType="numeric"
                  onChangeText={(amount) =>
                    setFormData({ ...formData, amount: amount })
                  }
                />
                {"amount" in errors ? (
                  <FormControl.ErrorMessage mb={3} mt={0}>
                    Amount is required.
                  </FormControl.ErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
            </View>
            <View>
              <FormControl isRequired isInvalid={"description" in errors}>
                <FormControl.Label style={{ fontFamily: FONT.bold }}>
                  <Text fontFamily={FONT.medium}>Description:</Text>
                </FormControl.Label>
                <TextArea
                  w={"100%"}
                  h={20}
                  placeholder="Description..."
                  onChangeText={(text) =>
                    setFormData({ ...formData, description: text })
                  }
                  borderColor={"description" in errors ? "red.400" : "gray.300"}
                />
                {"description" in errors ? (
                  <FormControl.ErrorMessage mb={3} mt={0}>
                    Description is required.
                  </FormControl.ErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControl isRequired isInvalid={"image" in errors}>
                <FormControl.Label style={{ fontFamily: FONT.bold }}>
                  <Text fontFamily={FONT.medium}>Upload Invoice:</Text>
                </FormControl.Label>
                <Button
                  size="sm"
                  variant="outline"
                  width={"100%"}
                  borderStyle={"dashed"}
                  borderColor={"image" in errors ? "red.400" : "gray.300"}
                  fontSize={16}
                  leftIcon={
                    <Icon
                      as={<MaterialIcons name="arrow-circle-up" />}
                      size={5}
                      ml="2"
                      color="blue.400"
                    />
                  }
                  onPress={() => setShowImgModal(true)}
                >
                  Click here to upload file
                </Button>
                {"image" in errors ? (
                  <FormControl.ErrorMessage mb={3} mt={0}>
                    Image is required.
                  </FormControl.ErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>

              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: "100%", height: 200, borderRadius: 8 }}
                />
              )}
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
        <Modal isOpen={showImgModal} onClose={() => setShowImgModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.Body>
              <Center>
                <HStack space={8}>
                  <TouchableOpacity
                    onPress={() => {
                      clickImage();
                      setShowImgModal(false);
                    }}
                    activeOpacity={0.6}
                  >
                    <VStack alignItems={"center"}>
                      <Icon
                        as={<MaterialIcons name="camera-alt" />}
                        size={16}
                      />
                      <Text style={styles.successModalTitle}>Take picture</Text>
                    </VStack>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      pickImage();
                      setShowImgModal(false);
                    }}
                    activeOpacity={0.6}
                  >
                    <VStack alignItems={"center"}>
                      <Icon as={<MaterialIcons name="image" />} size={16} />
                      <Text style={styles.successModalTitle}>Gallery</Text>
                    </VStack>
                  </TouchableOpacity>
                </HStack>
              </Center>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddReimbursement;
