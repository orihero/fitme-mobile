import { useNavigation } from "@react-navigation/native";

export const MainHomeHooks = () => {
  const navigation = useNavigation();

  const onPress = (route: never) => {
    navigation.navigate(route);
  };

  return {
    onPress,
  };
};
