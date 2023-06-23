import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackParamList } from "..";
import { MAIN } from "../../../../navigation/ROUTES";

export type ExerciseScreenRouteProp = RouteProp<
  MainStackParamList,
  MAIN.EXERCISE
>;

export const ExerciseHooks = () => {
  const route = useRoute<ExerciseScreenRouteProp>();
  const { exercise } = route.params;

  return { exercise };
};
