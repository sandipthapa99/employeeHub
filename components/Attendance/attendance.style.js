import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    paddingLeft: SIZES.xLarge,
    paddingRight: SIZES.xLarge,
  },
  upperDash: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  today: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  listContainer: {
    backgroundColor: COLORS.white,
    marginTop: 4,
    paddingVertical: 16,
    borderRadius: 10,
  },
  requestBtn: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 24,
    marginBottom: 24,
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 16,
    position: "absolute",
    right: 0,
    bottom: 80,
  },
  requestText: {
    color: COLORS.white,
    fontFamily: FONT.medium,
  },
  dropdown1BtnStyle: {
    width: 90,
    height: 20,
    backgroundColor: "#FFF",
  },
  dropdown2BtnStyle: {
    width: 120,
    height: 20,
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
