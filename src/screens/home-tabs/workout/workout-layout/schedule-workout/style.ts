import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../constants/COLORS";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  topTitle: {
    fontSize: 17,
    marginTop: 20,
    lineHeight: 23,
    marginBottom: 10,
    fontWeight: "600",
    color: COLORS.WHITE,
  },
  main: {
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
    flexDirection: "row",
  },
  header: {},
  workoutStake: {},
  setsStake: {
    borderLeftWidth: 1,
    borderColor: COLORS.GREY10,
  },
  weekStake: {
    borderLeftWidth: 1,
    borderColor: COLORS.GREY10,
  },
  titleColumn: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: COLORS.GREY3,
  },
  title: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "700",
    color: COLORS.WHITE,
  },
  column: {
    height: 40,
    backgroundColor: COLORS.GREY9,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: "center",
    // borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: COLORS.GREY10,
  },
  itemsStart: {
    alignItems: "flex-start",
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "700",
    color: COLORS.WHITE,
  },
  text2: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: "400",
    color: COLORS.WHITE,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: COLORS.GREY10,
  },
  btnRow: {
    marginTop: 16,
    flexDirection: "row",
  },
  btn1: {
    paddingVertical: 10,
    paddingHorizontal: 17,
    backgroundColor: COLORS.GREY2,
  },
  btn2: {
    width: 104,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderColor: COLORS.WHITE,
    backgroundColor: "transparent",
  },
  btnText1: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
    color: COLORS.GREEN,
  },
  btnText2: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
    color: COLORS.YELLOW,
  },
  btnText3: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
    textAlign: "center",
    color: COLORS.WHITE,
  },
  ml8: {
    marginLeft: 8,
  },
  textWhite: {
    color: COLORS.WHITE,
  },
  modal: {
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, .55)",
  },
  modalBox: {
    borderRadius: 10,
    paddingVertical: 32,
    paddingHorizontal: 36,
    backgroundColor: COLORS.GREY2,
  },
  modalTitle: {
    fontSize: 16,
    lineHeight: 17,
    fontWeight: "600",
    color: COLORS.WHITE,
    textAlign: "center",
  },
  modalRow: {
    marginTop: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalBtn1: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderColor: COLORS.YELLOW,
    backgroundColor: "transparent",
  },
  modalBtn2: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderColor: COLORS.GREEN,
    backgroundColor: "transparent",
  },
  modalBtnText1: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "700",
    color: COLORS.YELLOW,
  },
  modalBtnText2: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "700",
    color: COLORS.GREEN,
  },
});
