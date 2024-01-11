import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    paddingLeft: SIZES.xLarge,
    paddingRight: SIZES.xLarge,
    paddingTop: 24,
  },
  formWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    // marginTop: 30,
    padding: 16,
  },
  date: {
    flexDirection: "row",
    paddingBottom: 10,
    fontFamily: FONT.medium,
  },
  dropdown: {
    height: 50,
    width: 70,
  },
  dropdown1BtnStyle: {
    width: 150,
    height: 20,
    backgroundColor: "#FFF",
    borderRadius: 8,
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "right", fontSize: 12 },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
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
