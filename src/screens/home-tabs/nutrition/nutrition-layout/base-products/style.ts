import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../constants/COLORS";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  scrollCont: {
    margin: 25,
    flexDirection: "row",
  },
  tabCont: {
    alignItems: "flex-start",
    backgroundColor: "transparent",
  },
  box: {
    padding: 18,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: COLORS.GREY2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkbox: {
    width: 20,
    height: 20,
    padding: 2,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: COLORS.GREY6,
  },
  checkboxFilled: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.RED2,
  },
  main: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text1: {
    fontSize: 14,
    lineHeight: 13,
    fontWeight: "700",
    color: COLORS.WHITE,
  },
  text2: {
    marginTop: 3,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "300",
    color: COLORS.WHITE,
  },
  text3: {
    fontSize: 11,
    marginTop: 3,
    lineHeight: 13,
    fontWeight: "700",
    color: COLORS.WHITE,
  },
  text4: {
    fontSize: 11,
    lineHeight: 13,
    fontWeight: "400",
    color: COLORS.WHITE,
  },
  text5: {
    fontSize: 13,
    lineHeight: 13,
    marginLeft: 25,
    fontWeight: "700",
    color: COLORS.RED2,
  },
  btn: {
    marginTop: 35,
    paddingVertical: 18,
    marginHorizontal: 15,
    backgroundColor: COLORS.RED,
  },
  btnText: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: "700",
    color: COLORS.WHITE,
  },
  text: {
    color: COLORS.WHITE,
  },
  createButtonContainer: {
    position: "absolute",
    bottom: 80,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
});
