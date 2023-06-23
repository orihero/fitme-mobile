import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ProfileStackParamList } from "../..";
import { PROFILE } from "../../../../../navigation/ROUTES";
import { ApiService } from "../../../../../services";
import { useRedux } from "../../../../../store/hooks";
import { selectUser, setUser } from "../../../../../store/slices/appSlice";
import { Response, ScheduleWorkout, User } from "../../../../../types";

export type MyWorkoutScreenNavigationProp = NavigationProp<
  ProfileStackParamList,
  PROFILE.MY_DATA
>;

export const MyWorkoutHooks = () => {
  const [show, setShow] = useState<any>({});
  const [data, setData] = useState<ScheduleWorkout | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  const [user, dispatch] = useRedux(selectUser);

  const navigation = useNavigation<MyWorkoutScreenNavigationProp>();

  const effect = async () => {
    if (user) {
      setData(user.scheduleWorkouts.find((s) => !s.isFinished) ?? null);
    }
  };

  useEffect(() => {
    effect();
  }, [user]);

  const onHide = () => {
    setShowModal(false);
  };

  const onFinish = async () => {
    if (user) {
      setModalLoading(true);

      try {
        await ApiService.put(`/users/finish-schedule-workout/${user._id}`);

        const res = await ApiService.get<Response<User>>("/users/me");

        dispatch(setUser(res.data));
      } catch (e) {
        console.log("e: ", e);
      }

      setModalLoading(false);
      setShowModal(false);
    }
  };

  const onPress = (workoutIndex: number, weekIndex: number) => {
    if (data) {
      navigation.navigate(PROFILE.WORKOUT_RESULTS, {
        schedule: data,
        weekIndex,
        workoutIndex,
      });
    }
  };

  return {
    data,
    setData,
    show,
    setShow,
    showModal,
    setShowModal,
    modalLoading,
    onPress,
    onHide,
    onFinish,
  };
};
