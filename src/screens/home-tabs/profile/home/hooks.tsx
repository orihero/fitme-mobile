import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { PROFILE } from "../../../../navigation/ROUTES";
import { ApiService } from "../../../../services";
import { clearT } from "../../../../services/AuthService";
import { useRedux } from "../../../../store/hooks";
import { selectUser } from "../../../../store/slices/appSlice";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const ProfileHomeHooks = () => {
  const navigation = useNavigation();

  const [user, dispatch] = useRedux(selectUser);

  const [state, setState] = useState("");

  const onMyDataPress = () => {
    navigation.navigate(PROFILE.MY_DATA as never);
  };

  const onSettingsPress = () => {
    navigation.navigate(PROFILE.SETTINGS as never);
  };
  const onNotificationPress = () => {
    navigation.navigate(PROFILE.NOTIFICATIONS as never);
  };

  const onLogOut = async () => {
    try {
      const { phoneNumber: phone } = user ?? {};

      await ApiService.post("/auth/logout", { phone });

      clearT();
    } catch (e) {
      console.log("e: ", JSON.stringify(e, null, 4));
    }
  };

  return {
    state,
    setState,
    onMyDataPress,
    onSettingsPress,
    onNotificationPress,
    onLogOut,
  };
};
