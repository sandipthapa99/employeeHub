import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    paddingLeft: SIZES.xLarge,
    paddingRight: SIZES.xLarge,
    paddingTop: 24,
  },
  upperDash: {
    backgroundColor: COLORS.white,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },

  statsContainer: {
    flexDirection: "row",
    padding: 10,
  },
  stat: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    marginRight: 8,
  },
  statNum: {
    fontFamily: FONT.medium,
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
