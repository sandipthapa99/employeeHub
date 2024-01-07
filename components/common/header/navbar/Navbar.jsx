import React from "react";
import { Text, View } from "react-native";
import { COLORS } from "../../../../constants";

const Navbar = () => {
  return (
    <View style={{ backgroundColor: COLORS.primary, height: 71 }}>
      <Text>Navbar</Text>
    </View>
  );
};

export default Navbar;
