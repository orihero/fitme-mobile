import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { styles } from "./style";
import {
  ButtonPrimary,
  Controls,
  Header,
  InputPrimary,
} from "../../../../components/common";
import { CreateWorkoutPlanHooks } from "./hooks";
import { COLORS } from "../../../../constants/COLORS";

const CreateWorkoutPlanView = () => {
  const {
    loading,
    title,
    setTitle,
    description,
    setDescription,
    week,
    groupWorkouts,
    incWeek,
    decWeek,
    addGroupWorkout,
    removeGroupWorkout,
    onAddWorkouts,
    onSave,
  } = CreateWorkoutPlanHooks();

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Создание своей программы" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 90 }}>
          <Text style={styles.inputTopText}>{"Имя составителя"}</Text>
          <InputPrimary
            value={title}
            onChange={(t) => setTitle(t)}
            disablePlaceholder
            containerStyle={styles.input}
            inputStyle={styles.inputInner}
          />

          <Text style={styles.inputTopText}>{"Название программы"}</Text>
          <View style={styles.descriptionBox}>
            <Text style={styles.text}>
              {
                "Для достижения видимого результата в тренировках груди важен прогресс рабочих весов."
              }
            </Text>
          </View>

          <Text style={styles.inputTopText}>
            {"Кол-во тренировок в неделю"}
          </Text>

          {groupWorkouts.map((g, i) => (
            <ButtonPrimary
              fill
              key={`/${i}/`}
              text={`Тренировка ${i + 1}`}
              onPress={() => onAddWorkouts(i)}
              style={g.length ? styles.greenButton : styles.button}
              textStyle={styles.buttonText}
            />
          ))}

          <Controls
            text="Тренировка"
            onIncrement={addGroupWorkout}
            onDecrement={removeGroupWorkout}
          />

          <Text style={styles.inputTopText}>{"Кол-во недель"}</Text>

          {new Array(week).fill(1).map((w, i) => (
            <View key={i} style={styles.box}>
              <Text style={styles.boxText}>{`Неделя ${i + 1}-${
                (i + 1) * 4
              }`}</Text>
            </View>
          ))}

          <Controls text="Недели" onDecrement={decWeek} onIncrement={incWeek} />

          <Text style={styles.inputTopText}>{"Описание"}</Text>
          <InputPrimary
            multiline={true}
            disablePlaceholder
            value={description}
            onChange={(t) => setDescription(t)}
            inputStyle={styles.inputInner}
            containerStyle={styles.inputMultiline}
          />
          <ButtonPrimary
            text="Сохранить в “ Мои Программы “"
            fill
            loading={loading}
            loadingColor={COLORS.WHITE}
            onPress={onSave}
            style={styles.saveBtn}
            textStyle={styles.saveBtnText}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateWorkoutPlanView;
