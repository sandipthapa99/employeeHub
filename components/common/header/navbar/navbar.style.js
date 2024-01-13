import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: 71,
    width: "100%",
    flexDirection: "row",
  },
  grid: {
    width: 100 / 4 + "%",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: (activeTab, item) => ({
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: activeTab === item ? COLORS.tertiary : "transparent",
    borderRadius: 4,
    // padding: 10,
  }),
});

export default styles;
