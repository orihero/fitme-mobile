import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { MAIN } from "../../../../navigation/ROUTES";
import { ApiService } from "../../../../services";
import { Trainer } from "../../../../types";
import EventEmitter from "../../../../utils/EventEmitter";

export const CreateTrainerHook = () => {
  const [trainer, setTrainer] = useState<Partial<Trainer>>({});
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onChange = (key: keyof Trainer) => (value: any) => {
    setTrainer({ ...trainer, [key]: value });
  };

  const onTrainerSubmit = async () => {
    try {
      const current: Partial<Trainer> = {
        ...trainer,
        gender: trainer.trainerGenderType.value,
      };

      const res = await ApiService.post("/trainers", current);
      EventEmitter.notify("refreshTrainers");
    } catch (error) {
      console.log(JSON.stringify(error.response?.data));
    }
    navigation.navigate(MAIN.TRAINERS);
  };

  return {
    onChange,
    onTrainerSubmit,
    trainer,
  };
};
