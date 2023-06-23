import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import {
  ButtonSecondary,
  Header,
  InputPrimary,
} from "../../../../components/common";
import { CalcDailyNormHooks } from "./hooks";
import { styles } from "./style";

const text =
  "Расчёт вашей суточной нормы калорий, т.е. тех калорий, которые нужны для поддержания того веса, который вы имеете на данный момент. Из этих калорий будет вычитаться то количество калорий (количество дефицита), которое вы укажите далее";

const items = [
  "Мало хожу пешком",
  "Тренируюсь 3 раза в неделю. Мало хожу пешком",
  "Активный",
  "Текст",
  "Текст",
];

const CalcDailyNormView = () => {
  const {
    weight,
    setWeight,
    gender,
    setGender,
    selected,
    onSelect,
    calculated,
  } = CalcDailyNormHooks();

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <Header right />

      <Text style={styles.title}>{"Расчет вашей суточной нормы калорий"}</Text>
      <Text style={styles.text1}>{text}</Text>

      <View style={styles.mid}>
        <View style={styles.left}>
          <Text style={styles.title1}>{"Вес натoщак"}</Text>

          <InputPrimary
            value={weight}
            disablePlaceholder
            inputStyle={styles.input}
            containerStyle={styles.inputCont}
            onChange={(t) => setWeight(t.replace(/[^\d.-]+/g, ""))}
          />
        </View>
        <View style={styles.right}>
          <Text style={styles.title1}>{"Пол"}</Text>

          <View style={styles.rightRow}>
            <ButtonSecondary
              text="Муж"
              onPress={() => setGender(0)}
              containerStyle={[!!gender && styles.inActiveBtn]}
              textStyle={!gender ? styles.text2 : styles.inActiveBtnText}
            />
            <ButtonSecondary
              text="Жен"
              onPress={() => setGender(1)}
              textStyle={gender ? styles.text2 : styles.inActiveBtnText}
              containerStyle={[styles.ml15, !!!gender && styles.inActiveBtn]}
            />
          </View>
        </View>
      </View>

      <Text style={styles.title2}>{"Какой образ жизни вы ведете?"}</Text>
      {items.map((e, i) => (
        <TouchableOpacity
          key={i}
          style={styles.row}
          onPress={() => onSelect(i)}
        >
          <View style={styles.checkbox}>
            {i === selected && <View style={styles.checkboxFilled} />}
          </View>
          <Text style={styles.text3}>{e}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.title3}>{"Ваша суточная норма калорий"}</Text>
      <View style={styles.result}>
        <Text style={styles.title1}>{calculated}</Text>
      </View>
    </View>
  );
};

export default CalcDailyNormView;
