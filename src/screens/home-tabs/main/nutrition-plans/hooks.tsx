import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { MainStackParamList } from "..";
import { MAIN } from "../../../../navigation/ROUTES";

export type NutritionPlansScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  MAIN.NUTRITION_PLANS
>;

export const NutritionPlansHooks = () => {
  const [state, setState] = useState(0);
  const [subCategory, setSubCategory] = useState(0);

  const navigation = useNavigation<NutritionPlansScreenNavigationProp>();

  const onIndividualPress = () => {
    navigation.navigate(MAIN.TRAINERS, { individual: true });
  };

  const onCreatePlan = () => {
    
  };

  return {
    state,
    setState,
    onIndividualPress,
    subCategory,
    setSubCategory,
    onCreatePlan,
  };
};
