import { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { MainStackParamList } from "..";
import { MAIN } from "../../../../navigation/ROUTES";
import { ApiService } from "../../../../services";
import { GENDER, Trainer, Response } from "../../../../types";

export type TrainersScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  MAIN.TRAINERS
>;

export type TrainersScreenRouteProp = RouteProp<
  MainStackParamList,
  MAIN.TRAINERS
>;

export const TrainersHooks = () => {
  const [active, setActive] = useState(0);
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [search, setSearch] = useState("");

  const navigation = useNavigation<TrainersScreenNavigationProp>();
  const route = useRoute<TrainersScreenRouteProp>();
  const { individual } = route.params ?? {};

  const getTrainers = async () => {
    try {
      const resTrainers = await ApiService.get<Response<Trainer[]>>(
        `/trainers?gender=${active ? GENDER.FEMALE : GENDER.MALE}`
      );
      setTrainers(resTrainers.data);
    } catch (e) {
      console.log("e: ", e);
    }
  };

  useEffect(() => {
    getTrainers();
  }, [active]);

  const onPress = (index: number) => {
    navigation.navigate(MAIN.TRAINER, { trainer: trainers[index] });
  };

  return {
    search,
    setSearch,
    active,
    setActive,
    trainers,
    onPress,
    individual,
  };
};
