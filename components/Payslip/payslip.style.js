import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    paddingLeft: SIZES.xLarge,
    paddingRight: SIZES.xLarge,
  },
  upperDash: {},
  upperLeft: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 4,
  },
  upperRight: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  chart: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  legenTitle: {
    fontFamily: FONT.bold,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  legenSubTitle: {
    fontFamily: FONT.regular,
    color: COLORS.textGray,
  },
  earnings: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 16,
    marginTop: 16,
  },
  deductions: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginTop: 16,
  },
  earningsTitle: {
    fontFamily: FONT.regular,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  earningsAmount: {
    fontFamily: FONT.semiBold,
    fontSize: 16,
    color: COLORS.textPrimary,
  },

  dropdown1BtnStyle: {
    // width: 90,
    height: 30,
    backgroundColor: "#FFF",
  },
  dropdown1BtnTxtStyle: {
    color: COLORS.textPrimary,
    fontFamily: FONT.medium,
    textAlign: "left",
    fontSize: 14,
  },
  // dropdown1DropdownStyle: { backgroundColor: "#000" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: {
    color: COLORS.textPrimary,
    textAlign: "left",
    fontFamily: FONT.medium,
    fontSize: 14,
  },
});

export default styles;
