import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.xLarge,
  },
  header: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 12,
  },
  headerLeft: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    marginTop: 32,
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
    paddingRight: 12,
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
});

export default styles;
