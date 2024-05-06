import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { ROUTES } from "../../../navigation/ROUTES";
import { Dimensions, ScrollView } from "react-native";
import { ref } from "yup";

export const WelcomeHooks = () => {
  const [state, setState] = useState("");
  const [showedContent, setShowedContent] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const navigation = useNavigation();
  const onAuthorizationPress = () => {
    navigation.navigate(ROUTES.PUBLIC.SIGN_IN as never);
  };
  const onPress = (index = NaN, scroll = false) => {
    if (Number.isNaN(index) && showedContent !== 3) {
      scrollRef.current?.scrollTo({
        animated: true,
        x: Dimensions.get("window").width * (showedContent + 1),
      });
      setShowedContent((e) => e + 1);
      return;
    }

    if (showedContent === 3 && scroll) {
      navigation.navigate(ROUTES.PUBLIC.SIGN_UP as never);
    } else {
      setShowedContent(index);
    }
  };

  return {
    state,
    setState,
    showedContent,
    setShowedContent,
    onAuthorizationPress,
    onPress,
    scrollRef,
  };
};
