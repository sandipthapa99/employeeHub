import { Text } from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import Navbar from "../common/header/navbar/Navbar";

const Leave = ({ navigation }) => {
  return (
    <>
      <ScrollView></ScrollView>
      <Navbar navigation={navigation} page={"Leave"} />
    </>
  );
};

export default Leave;
