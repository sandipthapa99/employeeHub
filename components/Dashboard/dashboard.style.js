import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    paddingLeft: SIZES.xLarge,
    paddingRight: SIZES.xLarge,
    paddingTop: 72,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    marginTop: -24,
  },
  headerLeft: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  username: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: COLORS.textPrimary,
    marginLeft: 8,
  },
  upperDash: {
    backgroundColor: COLORS.white,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  today: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightWhite,
    flexDirection: "row",
    paddingBottom: 10,
  },
  date: {
    fontFamily: FONT.regular,
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  statsContainer: {
    flexDirection: "row",
    padding: 10,
  },
  stat: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 16,
    marginRight: 16,
  },
  statNum: {
    fontFamily: FONT.medium,
  },
  lowerDash: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginTop: 30,
    padding: 24,
  },

  dropdown: {
    height: 50,
    width: 70,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },

  dropdown1BtnStyle: {
    width: 150,
    height: 20,
    // backgroundColor: "#FFF",
    borderRadius: 8,
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "right", fontSize: 12 },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: {
    color: "#444",
    textAlign: "left",
    fontSize: 14,
    fontFamily: FONT.regular,
  },
  dropdown2BtnStyle: {
    height: 45,
    borderRadius: 4,
  },
});

export default styles;
