import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { PublickStackParamList } from "../../../navigation/PublicStack";
import { PUBLIC, ROUTES } from "../../../navigation/ROUTES";
import { ApiService } from "../../../services";
import { Response, SignUpResponse } from "../../../types";
import { showErrToast } from "../../../utils/showErrToast";

export type SignUpScreenNavigationProp = NativeStackNavigationProp<
  PublickStackParamList,
  PUBLIC.SIGN_UP
>;

export const SignUpHooks = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");

  const navigation = useNavigation<SignUpScreenNavigationProp>();

  useEffect(() => {
    if (phone.length < 4 || phone.slice(0, 4) !== "+998") {
      setPhone("+998");
    }
    if (phone.length > 13) {
      setPhone(phone.slice(0, 13));
    }
  }, [phone]);

  const onPress = async () => {
    try {
      if (!name) {
        showErrToast("Please enter name");
        return;
      }

      if (phone.length !== 13) {
        showErrToast("Please enter correct phone number");
        return;
      }

      setLoading(true);

      await ApiService.post<Response<SignUpResponse>>("/auth/signup", {
        name,
        phone,
      });

      setLoading(false);

      navigation.navigate(PUBLIC.VERIFY_CODE, { phone, from: "signup" });
    } catch (e: any) {
      setLoading(false);
      if (e.data && e.data.error && e.data.error.message) {
        showErrToast(e.data.error.message);
      } else {
        console.log("e: ", JSON.stringify(e, null, 4));
      }
    }
  };

  return { loading, name, setName, phone, setPhone, onPress };
};
