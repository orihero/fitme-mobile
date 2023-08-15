import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackParamList } from "..";
import { MAIN } from "../../../../navigation/ROUTES";
import { Linking, Alert } from "react-native";

export type TrainerScreenRouteProp = RouteProp<
  MainStackParamList,
  MAIN.TRAINER
>;

export const TrainerHooks = () => {
  const route = useRoute<TrainerScreenRouteProp>();
  const { trainer } = route.params ?? {};

  const openLink = (link: string) => () => {
    Linking.openURL(link);
  };

  const onPlansPress = (planType: string) => () => {
    Alert.alert("Внимание", `Пока нету ${planType}`);
  };

  return { trainer, openLink, onPlansPress };
};
