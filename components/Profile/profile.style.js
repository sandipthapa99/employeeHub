import Constants from "expo-constants";
import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const screen = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
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
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
    // borderBottomWidth: 2,
    borderBottomColor: "#C0C6D0",
  },
  tab: (activeTab, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    // borderRadius: SIZES.medium,
    borderBottomWidth: activeTab === item ? 2 : 0,
    borderBottomColor: activeTab === item ? COLORS.primary : COLORS.gray2,
  }),
  tabText: (activeTab, item) => ({
    fontFamily: FONT.medium,
    color: activeTab === item ? COLORS.primary : COLORS.gray2,
  }),
});

export default styles;
