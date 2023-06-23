import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { MainStackParamList } from "..";
import { MAIN, ROUTES } from "../../../../navigation/ROUTES";
import { ApiService } from "../../../../services";
import { useRedux } from "../../../../store/hooks";
import { selectLanguage } from "../../../../store/slices/appSlice";
import { selectExerciseCategories } from "../../../../store/slices/categorySlice";
import { Exercise, Response } from "../../../../types";

export type ExercisesScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  MAIN.EXERCISES
>;

export const ExercisesHooks = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSubCategory, setActiveSubCategory] = useState(0);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const navigation = useNavigation<ExercisesScreenNavigationProp>();
  const [exerciseCategories] = useRedux(selectExerciseCategories);
  const [language] = useRedux(selectLanguage);

  useEffect(() => {
    setActiveSubCategory(0);
  }, [activeCategory]);

  const getExercises = async () => {
    try {
      const resExercises = await ApiService.get<Response<Exercise[]>>(
        `/exercises?category=${exerciseCategories[activeCategory].children[activeSubCategory]._id}`
      );
      setExercises(resExercises.data);
    } catch (e) {
      console.log("e: ", e);
    }
  };

  useEffect(() => {
    getExercises();
  }, [activeCategory, activeSubCategory]);

  const onPress = (index: number) => {
    navigation.navigate(MAIN.EXERCISE, { exercise: exercises[index] });
  };

  return {
    activeCategory,
    setActiveCategory,
    activeSubCategory,
    setActiveSubCategory,
    exerciseCategories,
    language,
    onPress,
    exercises,
  };
};
