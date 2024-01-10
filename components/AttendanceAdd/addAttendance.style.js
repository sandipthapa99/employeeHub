import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    paddingLeft: SIZES.xLarge,
    paddingRight: SIZES.xLarge,
  },
  upperDash: {
    backgroundColor: COLORS.white,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  lowerDash: {
    backgroundColor: COLORS.white,
    marginTop: 24,
    padding: 24,
    borderRadius: 10,
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
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  dropdown2BtnStyle: {
    height: 45,
    borderRadius: 4,
  },
  dropdown2BtnTxtStyle: { color: "#444", textAlign: "auto", fontSize: 14 },
  dropdown2DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown2RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown2RowTxtStyle: {
    color: "#444",
    textAlign: "left",
    fontFamily: FONT.medium,
    fontSize: 12,
  },
});

export default styles;
