import Constants from "expo-constants";
import { Dimensions, StyleSheet } from "react-native";
import { FONT } from "../../constants";

const screen = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
  },
  top: {
    backgroundColor: "#EBF0F0",
    width: screen.width * 2,
    height: screen.width * 2.2,
    bottom: screen.height - screen.height * 0.3,
    borderRadius: screen.width,
    left: -200,
  },
  profile: {
    position: "absolute",
    top: -50,
  },

  name: {
    marginTop: 60,
    fontFamily: FONT.semiBold,
    fontSize: 24,
    lineHeight: 32,
  },
  contact: {
    fontFamily: FONT.regular,
  },
  bottom: {
    backgroundColor: "#fff",
    height: screen.height - 300,
    alignItems: "center",
    bottom: screen.height - screen.height * 0.3,
  },
});

export default styles;
