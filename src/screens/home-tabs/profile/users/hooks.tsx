import { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { MAIN, PROFILE } from "../../../../navigation/ROUTES";
import { ApiService } from "../../../../services";
import { GENDER, Trainer, Response, User } from "../../../../types";
import { MainStackParamList } from "../../main";
import { ProfileStackParamList } from "..";
import { useSelector } from "react-redux";
import { selectTrainer } from "../../../../store/slices/appSlice";

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
  const trainer = useSelector(selectTrainer);

  const { params } =
    useRoute<RouteProp<ProfileStackParamList, PROFILE.USERS>>();

  const getTrainers = async () => {
    try {
      const resUsers = await ApiService.get<Response<User[]>>(`/users`);
      setUsers(resUsers.data);
    } catch (e) {
      console.log("e: ", e);
    }
  };

  useEffect(() => {
    if (params.isTrainer) {
      setUsers(trainer?.disciples || []);
    } else {
      getTrainers();
    }
  }, [active]);

  const filteredUsers = !!search
    ? users.filter(
        (e) => e.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
    : users;

  return {
    search,
    setSearch,
    active,
    setActive,
    users: filteredUsers,
  };
};
