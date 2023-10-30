import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../constants/COLORS";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    flexGrow: 1,
    height: Dimensions.get("screen").height,
    maxHeight: Dimensions.get("screen").height,
  },
  footerContainer: {
    height: "40%",
    justifyContent: "flex-end",
    paddingBottom: 30,
    alignItems: "center",
  },
  headerContainer: {
    height: "50%",
    justifyContent: "flex-end",
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 5,
    color: COLORS.GREY,
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 10,
  },
  textHeader: {
    color: COLORS.BLACK,
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: COLORS.BLACK,
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 20,
  },
  btnText: {
    color: COLORS.WHITE,
    fontSize: 17,
    fontWeight: "500",
  },
  textFooter: {
    textAlign: "center",
    color: COLORS.BLACK,
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "300",
    color: COLORS.GREY,
    marginVertical: 20,
  },

  textOne: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "300",
    color: COLORS.BLACK,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    // width: "30%",
    // justifyContent: "space-around",
    paddingBottom: 40,
    backgroundColor: "transparent",
  },
});
