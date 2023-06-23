import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackParamList } from "..";
import { MAIN } from "../../../../navigation/ROUTES";

export type TrainerScreenRouteProp = RouteProp<
  MainStackParamList,
  MAIN.TRAINER
>;

export const TrainerHooks = () => {
  const route = useRoute<TrainerScreenRouteProp>();
  const { trainer } = route.params ?? {};

  return { trainer };
};
