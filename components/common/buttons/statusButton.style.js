import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: (status) => ({
    width: 72,
    backgroundColor:
      status === "Approved"
        ? "#1ECC45"
        : status === "Pending" || status === "Weekend"
        ? "#EEBA00"
        : status === "Rejected" || status === "Leave"
        ? "#EC5E0E"
        : status === "Working"
        ? "#fff"
        : "transparent",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  }),
  text: (status) => ({
    color: status === "Working" ? COLORS.textGray : COLORS.white,
    fontFamily: FONT.medium,
    fontSize: 12,
  }),
});

export default styles;
