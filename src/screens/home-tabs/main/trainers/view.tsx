import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import {
  ButtonTabs,
  Header,
  InputPrimary,
} from "../../../../components/common";
import { TrainersHooks } from "./hooks";
import { COLORS } from "../../../../constants/COLORS";
import { TrainerBox } from "../../../../components";
import { Env } from "../../../../../env";

const TrainersView = () => {
  const {
    search,
    setSearch,
    active,
    setActive,
    trainers,
    onPress,
    individual,
  } = TrainersHooks();

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <Header title={individual ? "Индивидуальная программа" : "Тренеры"} />

      {individual && (
        <Text style={styles.text}>
          {
            "Чтобы заказать индивидуальный план питания вам нужно выбрать тренера и написать ему в мессенджер, который указан в его профиле"
          }
        </Text>
      )}

      <InputPrimary
        value={search}
        onChange={(value) => setSearch(value)}
        placeholder={"Поиск"}
        placeholderColor={COLORS.WHITE}
        containerStyle={{
          backgroundColor: COLORS.GREY3,
          marginTop: 10,
          borderRadius: 10,
        }}
        inputStyle={{
          backgroundColor: COLORS.GREY3,
          color: COLORS.WHITE,
        }}
        onSearch={() => console.log("onSearch!!")}
      />

      <ButtonTabs
        active={active}
        setActive={setActive}
        titles={["Мужчины", "Женщины"]}
        primary
        containerStyle={{
          justifyContent: "center",
          marginVertical: 20,
        }}
        scroll={false}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 100 }}>
          {trainers.map((trainer, i) => (
            <TouchableOpacity
              key={trainer._id}
              onPress={() => onPress(i)}
              activeOpacity={0.7}
              style={{ marginBottom: 10 }}
            >
              <TrainerBox
                avatar={{ uri: trainer.avatar }}
                name={trainer.name}
                speciality={trainer.speciality}
                age={trainer.age}
                city={trainer.city}
                experience={trainer.experience}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TrainersView;
