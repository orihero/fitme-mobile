import {
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { styles } from "./style";
import { Box } from "../../../../components/common";
import { Assets } from "../../../../utils/requireAssets";
import { MainHomeHooks } from "./hooks";
import { ROUTES } from "../../../../navigation/ROUTES";
import { COLORS } from "../../../../constants/COLORS";

const MainHomeView = () => {
  const { onPress } = MainHomeHooks();

  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor={"transparent"} /> */}
      <StatusBar backgroundColor={COLORS.BLACK} />

      <SafeAreaView />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 110, marginHorizontal: 15 }}>
          {data.map((e, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.7}
              onPress={() => onPress(e.to as never)}
            >
              <Box
                cover={e.cover}
                title={e.title}
                text={e.text}
                containerStyle={{ marginTop: 10 }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MainHomeView;

const data = [
  {
    title: "База упражнений",
    text: "Для всех групп мышц",
    cover: Assets.images.cover1,
    to: ROUTES.TABS.MAIN.EXERCISES,
  },
  {
    title: "Программы тренировок",
    text: "Для Мужчин и Женщин Для Новичков и Продвинутых",
    cover: Assets.images.cover2,
    to: ROUTES.TABS.MAIN.WORKOUT_PLANS,
  },
  {
    title: "Планы питания",
    text: "Для жиросжигания и набора мышечной массы",
    cover: Assets.images.cover3,
    to: ROUTES.TABS.MAIN.NUTRITION_PLANS,
  },
  {
    title: "Тренеры",
    text: "Выберите себе наставника, который поможет вам добиться ваших целей",
    cover: Assets.images.cover4,
    to: ROUTES.TABS.MAIN.TRAINERS,
  },
];
