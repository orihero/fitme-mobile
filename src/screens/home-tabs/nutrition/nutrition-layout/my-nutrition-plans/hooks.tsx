import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { NutritionStackParamList } from "../..";
import { NUTRITION } from "../../../../../navigation/ROUTES";
import { useRedux } from "../../../../../store/hooks";
import { selectUser } from "../../../../../store/slices/appSlice";
import {
  NutritionPlan,
  NUTRITION_TYPE,
  ROLES,
  Response,
} from "../../../../../types";
import { ApiService } from "../../../../../services";

export type MyNutritionPlansScreenNavigationProp = NativeStackNavigationProp<
  NutritionStackParamList,
  NUTRITION.NUTRITION_LAYOUT
>;

export const MyNutritionPlansHooks = () => {
  const navigation = useNavigation<MyNutritionPlansScreenNavigationProp>();

  const [user] = useRedux(selectUser);

  const [activeTab, setActiveTab] = useState(0);
  const [plans, setPlans] = useState<NutritionPlan[]>([]);
  const [subCategory, setSubCategory] = useState(1);
  const isSuperAdmin = user?.role === ROLES.SUPERADMIN;

  const effect = async () => {
    const resWorkoutPlans = await ApiService.get<Response<NutritionPlan[]>>(
      `/nutrition-plans?isPublic=true`
    );
    setPlans(
      resWorkoutPlans.data.filter((nP) => {
        let consumption =
          subCategory == 1
            ? nP.nutritions.length >= 3
            : nP.nutritions.length <= 2;
        return (
          nP.type === NUTRITION_TYPE[activeTab ? "THIN" : "FAT"] && consumption
        );
      })
    );
    // if (user) {
    //   setPlans(
    //     user.nutritionPlans.filter(
    //       (nP) => nP.type === NUTRITION_TYPE[activeTab ? "THIN" : "FAT"]
    //     )
    //   );
    // }
  };

  useEffect(() => {
    effect();
  }, [activeTab, subCategory]);

  const onPlanPress = (index: number) => {
    navigation.navigate(NUTRITION.NUTRITION_PLAN, {
      plan: plans[index],
    });
  };

  const onPress = () => {
    navigation.navigate(NUTRITION.CREATE_NUTRITION_PLAN, {
      type: NUTRITION_TYPE[activeTab ? "THIN" : "FAT"],
    });
  };

  return {
    activeTab,
    setActiveTab,
    plans,
    onPlanPress,
    onPress,
    isSuperAdmin,
    subCategory,
    setSubCategory,
  };
};
