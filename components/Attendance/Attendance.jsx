import { Text } from "native-base";
import React from "react";
import { ScrollView, View } from "react-native";
import Navbar from "../common/header/navbar/Navbar";

const Attendance = ({ navigation }) => {
  return (
    <>
      <ScrollView></ScrollView>
      <Navbar navigation={navigation} page={"Attendance"} />
    </>
  );
};

export default Attendance;
