import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { WorkoutStackParamList } from "../..";
import { ROUTES, WORKOUT } from "../../../../../navigation/ROUTES";
import { ApiService } from "../../../../../services";
import { useRedux } from "../../../../../store/hooks";
import { selectUser, setUser } from "../../../../../store/slices/appSlice";
import { ROLES, Response, User, WorkoutPlan } from "../../../../../types";

export type MyWorkoutPlansScreenNavigationProp = NativeStackNavigationProp<
  WorkoutStackParamList,
  WORKOUT.WORKOUT_LAYOUT
>;

export const MyWorkoutPlansHooks = () => {
  const [loading, setLoading] = useState<any>();
  const [show, setShow] = useState<any>();

  const [user, dispatch] = useRedux(selectUser);
  const { workoutPlans } = user ?? {};

  const navigation = useNavigation<MyWorkoutPlansScreenNavigationProp>();

  const onPress = (workoutPlan: WorkoutPlan) => {
    navigation.navigate(WORKOUT.WORKOUT_PLAN, {
      workoutPlan,
    });
  };

  const onRemove = async (i: number) => {
    try {
      setLoading({ [i]: !(loading && loading[i]) });

      const planId = (workoutPlans && workoutPlans[i]._id) ?? "";

      await ApiService.patch(`/users/remove-workout-plan/${user?._id}`, {
        planId,
      });

      const res = await ApiService.get<Response<User>>("/users/me");

      dispatch(setUser(res.data));

      setLoading(undefined);
      setShow(undefined);
    } catch (e) {
      console.log("e: ", e);
    }
  };

  const onCreate = () => {
    navigation.navigate(ROUTES.TABS.WORKOUT.CREATE_WORKOUT_PLAN as never);
  };

  return {
    loading,
    setLoading,
    show,
    setShow,
    onPress,
    onCreate,
    onRemove,
    workoutPlans,
    isSuperAdmin: user?.role === ROLES.SUPERADMIN,
  };
};
