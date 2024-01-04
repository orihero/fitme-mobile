import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/COLORS";
import { NUTRITION, PROFILE } from "../../navigation/ROUTES";
import { Assets } from "../../utils/requireAssets";
import Icon from "./Icon";

const Header = ({
  title,
  right,
  bottom,
  onBackPress,
}: {
  title?: string;
  right?: boolean;
  bottom?: boolean;
  onBackPress?: () => void;
}) => {
  const navigation = useNavigation();

  const onPress = async () => {
    try {
      onBackPress && (await onBackPress());
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onRightPress = () => {
    navigation.navigate(NUTRITION.RECOMMENDATION as never);
  };

  const onBottomPress = () => {
    navigation.navigate(PROFILE.RECOMMENDATION as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={onPress} style={styles.press}>
          <Icon source={Assets.icons.arrow} width={18} height={18} />
          <Text style={styles.back}>{"Назад"}</Text>
        </TouchableOpacity>

        <View>
          {!!right && (
            <TouchableOpacity onPress={onRightPress} style={styles.btn}>
              <Text style={styles.text}>{"Развёрнутые рекомендации"}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        {bottom && (
          <TouchableOpacity onPress={onBottomPress} style={styles.btn}>
            <Text style={styles.text}>{"Развёрнутые рекомендации"}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // marginLeft: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  press: {
    flexDirection: "row",
    alignItems: "center",
  },
  back: {
    fontSize: 19,
    marginLeft: 6,
    lineHeight: 23,
    fontWeight: "400",
    color: COLORS.WHITE,
  },
  title: {
    fontSize: 21,
    marginTop: 18,
    lineHeight: 40,
    fontWeight: "700",
    color: COLORS.WHITE,
  },
  btn: {
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    borderColor: COLORS.WHITE,
  },
  text: {
    fontSize: 11,
    lineHeight: 13,
    fontWeight: "400",
    color: COLORS.WHITE,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
