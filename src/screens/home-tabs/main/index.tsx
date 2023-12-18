import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreateExerciseScreen from "./create-exercise/view";
import ExerciseScreen from "./exercise";
import ExercisesScreen from "./exercises";
import MainHomeScreen from "./home";
import NutritionPlansScreen from "./nutrition-plans";
import PaymentScreen from "./payment";
import TrainerScreen from "./trainer";
import TrainersScreen from "./trainers";
import WorkoutPlanScreen from "./workout-plan";
import WorkoutPlansScreen from "./workout-plans";
import CreateTrainerView from "./create-trainer/view";

import { MAIN, NUTRITION } from "../../../navigation/ROUTES";
import { Exercise, Trainer, WorkoutPlan, NutritionPlan } from "../../../types";
import CreateNutrition from "../nutrition/create-nutrition-plan";
import AddPartPlan from "../nutrition/add-part-plan";
import AddReception from "../nutrition/add-reception";
import AddProducts from "../nutrition/add-products";
import NutritionPlanScreen from "../nutrition/nutrition-plan";

export type MainStackParamList = {
  [MAIN.HOME]: undefined;
  [MAIN.EXERCISES]: undefined;
  [MAIN.CREATE_EXERCISE]: undefined;
  [MAIN.EXERCISE]: {
    exercise: Exercise;
  };
  [MAIN.WORKOUT_PLANS]: undefined;
  [MAIN.WORKOUT_PLAN]: {
    workoutPlan: WorkoutPlan;
  };
  [MAIN.NUTRITION_PLANS]: undefined;
  [NUTRITION.NUTRITION_PLAN]: {
    nutritionPlan: NutritionPlan;
  };
  [MAIN.TRAINERS]: {
    individual?: boolean;
  };
  [MAIN.TRAINER]: {
    trainer: Trainer;
  };
  [MAIN.PAYMENT]: undefined;
  [MAIN.PAYMENT]: undefined;
  [MAIN.CREATE_TRAINER]: undefined;
  [NUTRITION.CREATE_NUTRITION_PLAN]: undefined;
  [NUTRITION.ADD_PART_PLAN]: undefined;
  [NUTRITION.ADD_RECEPTION]: undefined;
  [NUTRITION.ADD_PRODUCTS]: undefined;
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
        name={MAIN.CREATE_EXERCISE}
        component={CreateExerciseScreen}
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
      <Stack.Screen
        name={MAIN.CREATE_TRAINER}
        component={CreateTrainerView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NUTRITION.CREATE_NUTRITION_PLAN}
        component={CreateNutrition}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NUTRITION.ADD_PART_PLAN}
        component={AddPartPlan}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NUTRITION.ADD_RECEPTION}
        component={AddReception}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NUTRITION.ADD_PRODUCTS}
        component={AddProducts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NUTRITION.NUTRITION_PLAN}
        component={NutritionPlanScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
