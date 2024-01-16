import Constants from "expo-constants";
import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const screen = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    paddingLeft: SIZES.xLarge,
    paddingRight: SIZES.xLarge,
  },
  top: {
    backgroundColor: "#EBF0F0",
    width: screen.width * 2,
    height: screen.width * 2,
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
  tabContentLeft: {
    fontFamily: FONT.semiBold,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  tabContentRight: {
    fontFamily: FONT.regular,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.gray2,
  },
  tabsContainer: {
    width: "100%",
    marginTop: 42,
    // backgroundColor: "#f00",
  },
  tab: (activeTab, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderBottomWidth: activeTab === item ? 2 : 0,
    borderBottomColor: activeTab === item ? COLORS.primary : COLORS.gray2,
  }),
  tabText: (activeTab, item) => ({
    fontFamily: FONT.medium,
    color: activeTab === item ? COLORS.primary : COLORS.textPrimary,
  }),
});

export default styles;
