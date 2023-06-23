import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileHome from "./home";
import MyData from "./my-data";
import MyTrainer from "./my-trainer";
import Notifications from "./notifications";
import Settings from "./settings";
import AddProducts from "./add-products";
import Recommendation from "./recommendation";
import ExerciseScreen from "./exercise";
import WorkoutResults from "./workout-results";

import { PROFILE } from "../../../navigation/ROUTES";
import {
  Exercise,
  Product,
  ScheduleWorkout,
  SchemaNutrition,
} from "../../../types";

export type ProfileStackParamList = {
  [PROFILE.HOME]: undefined;
  [PROFILE.MY_DATA]: undefined;
  [PROFILE.MY_TRAINER]: undefined;
  [PROFILE.NOTIFICATIONS]: undefined;
  [PROFILE.SETTINGS]: undefined;
  [PROFILE.RECOMMENDATION]: undefined;
  [PROFILE.WORKOUT_RESULTS]: {
    schedule: ScheduleWorkout;
    workoutIndex: number;
    weekIndex: number;
  };
  [PROFILE.EXERCISE]: {
    exercise: Exercise;
  };
  [PROFILE.ADD_PRODUCTS]: {
    products: Product[];
    schemaNutrition: SchemaNutrition;
  };
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PROFILE.HOME}
        component={ProfileHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={PROFILE.MY_DATA}
        component={MyData}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={PROFILE.MY_TRAINER}
        component={MyTrainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={PROFILE.NOTIFICATIONS}
        component={Notifications}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={PROFILE.SETTINGS}
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={PROFILE.RECOMMENDATION}
        component={Recommendation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={PROFILE.EXERCISE}
        component={ExerciseScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={PROFILE.WORKOUT_RESULTS}
        component={WorkoutResults}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={PROFILE.ADD_PRODUCTS}
        component={AddProducts}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;