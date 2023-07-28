import { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { MAIN } from "../../../../navigation/ROUTES";
import { ApiService } from "../../../../services";
import { GENDER, Trainer, Response, User } from "../../../../types";
import { MainStackParamList } from "../../main";

export type TrainersScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  MAIN.TRAINERS
>;

export type TrainersScreenRouteProp = RouteProp<
  MainStackParamList,
  MAIN.TRAINERS
>;

export const UsersHooks = () => {
  const [active, setActive] = useState(0);
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  const navigation = useNavigation<TrainersScreenNavigationProp>();
  const route = useRoute<TrainersScreenRouteProp>();
  const { individual } = route.params ?? {};

  const getTrainers = async () => {
    try {
      const resUsers = await ApiService.get<Response<User[]>>(`/users`);
      setUsers(resUsers.data);
    } catch (e) {
      console.log("e: ", e);
    }
  };

  useEffect(() => {
    getTrainers();
  }, [active]);

  return {
    search,
    setSearch,
    active,
    setActive,
    users,
    individual,
  };
};
