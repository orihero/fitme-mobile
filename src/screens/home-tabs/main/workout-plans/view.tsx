import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import { Assets } from "../../../../utils/requireAssets";
import {
  Box,
  ButtonPrimary,
  ButtonTabs,
  Header,
} from "../../../../components/common";
import { WorkoutPlansHooks } from "./hooks";

const WorkoutPlansView = () => {
  const {
    activeGender,
    setActiveGender,
    activeLevel,
    setActiveLevel,
    workoutPlans,
    onPress,
    onIndividualPress,
  } = WorkoutPlansHooks();

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <View style={styles.header}>
        <Header title="Програмы тренировок" />
      </View>

      <ButtonTabs
        primary
        active={activeGender}
        setActive={setActiveGender}
        titles={["Мужчины", "Женщины"]}
        containerStyle={styles.genderBtnCont}
      />
      <ButtonTabs
        secondary
        active={activeLevel}
        setActive={setActiveLevel}
        titles={["Новичок", "Опытный", "Продвинутый"]}
        containerStyle={styles.levelBtnCont}
      />

      <Text style={styles.text}>
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          {workoutPlans.map((workoutPlan, i) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={workoutPlan._id}
              onPress={() => onPress(i)}
            >
              <Box
                cover={Assets.images.cover1}
                title={workoutPlan.title}
                text={workoutPlan.creator.name}
                containerStyle={{ marginTop: 15 }}
                right={workoutPlan.price ? `${workoutPlan.price}` : "Бесплатно"}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.buttonCont}>
        <ButtonPrimary
          text="Заказать Программу ( индивидуальную )"
          fill
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={onIndividualPress}
        />
      </View>
    </View>
  );
};

export default WorkoutPlansView;
