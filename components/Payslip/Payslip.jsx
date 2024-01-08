import { Text } from "native-base";
import React from "react";
import { ScrollView, View } from "react-native";
import Navbar from "../common/header/navbar/Navbar";

const Payslip = ({ navigation }) => {
  return (
    <>
      <ScrollView></ScrollView>
      <Navbar navigation={navigation} page={"Payslip"} />
    </>
  );
};

export default Payslip;
