import { Text } from "native-base";
import React from "react";
import { View } from "react-native";
import Navbar from "../common/header/navbar/Navbar";

const Profile = ({ navigation }) => {
  return (
    <View>
      <Navbar navigation={navigation} page="Profile" />
    </View>
  );
};

export default Profile;
