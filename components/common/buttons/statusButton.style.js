import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: (status) => ({
    width: 72,
    backgroundColor:
      status === "Approved"
        ? "#1ECC45"
        : status === "Pending"
        ? "#EEBA00"
        : "#EC5E0E",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  }),
  text: {
    color: COLORS.white,
    fontFamily: FONT.medium,
    fontSize: 12,
  },
});

export default styles;
