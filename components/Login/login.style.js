const { StyleSheet } = require("react-native");
const { SIZES, COLORS } = require("../../constants/theme");

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "start",
    paddingTop: 80,
  },
  topSection: {
    alignItems: "center",
  },
  welcomeText: {
    fontFamily: "Poppins-Medium",
    fontSize: 24,
    color: COLORS.textPrimary,
    marginTop: 16,
  },
  subText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: COLORS.textGray,
    marginBottom: 32,
  },
  rememberSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 54,
    fontFamily: "Poppins-Regular",
  },
  rememberText: {
    fontFamily: "Poppins-Regular",
    color: COLORS.textGray,
  },
  forgetPw: {
    fontFamily: "Poppins-Regular",
    color: COLORS.link,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
});

export default styles;
