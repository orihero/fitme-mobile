import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainHomeScreen from "./home";
import ExercisesScreen from "./exercises";
import ExerciseScreen from "./exercise";
import WorkoutPlansScreen from "./workout-plans";
import WorkoutPlanScreen from "./workout-plan";
import NutritionPlansScreen from "./nutrition-plans";
import NutritionPlanScreen from "./nutrition-plan";
import TrainersScreen from "./trainers";
import TrainerScreen from "./trainer";
import PaymentScreen from "./payment";

import { MAIN } from "../../../navigation/ROUTES";
import { Exercise, NutritionPlan, Trainer, WorkoutPlan } from "../../../types";

export type MainStackParamList = {
  [MAIN.HOME]: undefined;
  [MAIN.EXERCISES]: undefined;
  [MAIN.EXERCISE]: {
    exercise: Exercise;
  };
  [MAIN.WORKOUT_PLANS]: undefined;
  [MAIN.WORKOUT_PLAN]: {
    workoutPlan: WorkoutPlan;
  };
  [MAIN.NUTRITION_PLANS]: undefined;
  [MAIN.NUTRITION_PLAN]: {
    nutritionPlan: NutritionPlan;
  };
  [MAIN.TRAINERS]: {
    individual?: boolean;
  };
  [MAIN.TRAINER]: {
    trainer: Trainer;
  };
  [MAIN.PAYMENT]: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={MAIN.HOME}>
      <Stack.Screen
        name={MAIN.HOME}
        component={MainHomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={MAIN.EXERCISES}
        component={ExercisesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={MAIN.EXERCISE}
        component={ExerciseScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={MAIN.WORKOUT_PLANS}
        component={WorkoutPlansScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={MAIN.WORKOUT_PLAN}
        component={WorkoutPlanScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={MAIN.NUTRITION_PLANS}
        component={NutritionPlansScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={MAIN.NUTRITION_PLAN}
        component={NutritionPlanScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={MAIN.TRAINERS}
        component={TrainersScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={MAIN.TRAINER}
        component={TrainerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={MAIN.PAYMENT}
        component={PaymentScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
