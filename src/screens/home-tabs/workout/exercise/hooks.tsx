import { RouteProp, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { WorkoutStackParamList } from "..";
import { WORKOUT } from "../../../../navigation/ROUTES";

export type ExerciseScreenRouteProp = RouteProp<
  WorkoutStackParamList,
  WORKOUT.EXERCISE
>;

export const WorkoutExerciseHooks = () => {
  const route = useRoute<ExerciseScreenRouteProp>();
  const { exercise } = route.params;

  return { exercise };
};
