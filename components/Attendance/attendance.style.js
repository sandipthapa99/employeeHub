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
});

export default styles;
