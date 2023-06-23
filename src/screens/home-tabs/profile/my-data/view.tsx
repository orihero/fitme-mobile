import { View, Text, SafeAreaView } from "react-native";
import { ButtonTabs, Header } from "../../../../components/common";
import MyNutrition from "./my-nutrition";
import MyWorkout from "./my-workout";
import MyMeasurements from "./my-measurements";
import { MyDataHooks } from "./hooks";
import { styles } from "./style";

const MyDataView = () => {
  const { active, setActive } = MyDataHooks();

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <View style={styles.mh25}>
        <Header title="Мои данные" bottom={active === 2} />

        <View style={styles.mt18}>
          <ButtonTabs
            primary
            active={active}
            setActive={setActive}
            titles={["Моё питание", "Мой тренинг", "Мои замеры"]}
          />
        </View>
      </View>

      {active === 0 && <MyNutrition />}
      {active === 1 && <MyWorkout />}
      {active === 2 && <MyMeasurements />}
    </View>
  );
};

export default MyDataView;
