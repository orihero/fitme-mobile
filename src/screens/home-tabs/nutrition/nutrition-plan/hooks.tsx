import { useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { NutritionStackParamList } from "..";
import { NUTRITION } from "../../../../navigation/ROUTES";
import { useRedux } from "../../../../store/hooks";
import { selectLanguage } from "../../../../store/slices/appSlice";
import { Reception } from "../../../../types";
import { convertDishToProduct } from "../../../../utils/convertDishToProduct";

export type NutritionPlanScreenRouteProp = RouteProp<
  NutritionStackParamList,
  NUTRITION.NUTRITION_PLAN
>;

export const NutritionPlanHooks = () => {
  const route = useRoute<NutritionPlanScreenRouteProp>();

  const { plan } = route.params ?? {};

  const [language] = useRedux(selectLanguage);

  const [activePlan, setActivePlan] = useState(0);
  const [activeReception, setActiveReception] = useState(0);
  const [reception, setReception] = useState<Reception | null>(null);

  useEffect(() => {
    setActiveReception(0);
  }, [activePlan]);

  useEffect(() => {
    setReception(plan.nutritions[activePlan][activeReception]);
  }, [activePlan, activeReception]);

  return {
    language,
    plan,
    reception,
    activePlan,
    setActivePlan,
    activeReception,
    setActiveReception,
  };
};
