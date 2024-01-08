import { Text } from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import Navbar from "../common/header/navbar/Navbar";

const Notification = ({ navigation }) => {
  return (
    <>
      <ScrollView></ScrollView>
      <Navbar navigation={navigation} page={"Payslip"} />
    </>
  );
};

export default Notification;
