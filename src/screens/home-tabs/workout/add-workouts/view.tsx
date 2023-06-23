import {
  View,
  Text,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { styles } from "./style";
import {
  ButtonPrimary,
  ButtonSecondary,
  Header,
  Icon,
  InputPrimary,
  InputSecondary,
} from "../../../../components/common";
import { AddWorkoutHooks } from "./hooks";
import { Assets } from "../../../../utils/requireAssets";
import { COLORS } from "../../../../constants/COLORS";

const { height } = Dimensions.get("screen");

const AddWorkoutView = () => {
  const {
    show,
    approach,
    setApproach,
    repetitions,
    setRepetitions,
    modalError,
    onPress,
    onShow,
    onHide,
    onSet,
    workouts,
    onAddExercise,
    onSave,
  } = AddWorkoutHooks();

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <Header title="Тренировка 1" />

      <View style={{ flex: 1, justifyContent: "center" }}>
        <ScrollView>
          {workouts.map((w, i) => (
            <View key={i} style={{ marginTop: 30 }}>
              <View style={styles.head}>
                <ScrollView
                  horizontal={true}
                  contentContainerStyle={{ alignItems: "center" }}
                  showsHorizontalScrollIndicator={false}
                >
                  <Text style={styles.text}>{`${i + 1}. ${
                    w.exercise.title
                  }`}</Text>
                  <ButtonSecondary
                    onPress={() => onShow(i)}
                    containerStyle={[
                      { marginLeft: 20 },
                      !!!(w.approach && w.repetitions) && { width: 70 },
                    ]}
                    text={
                      w.approach && w.repetitions
                        ? `${w.approach}x${w.repetitions ?? "     "}`
                        : ""
                    }
                  />
                  <ButtonSecondary
                    text="Техника"
                    onPress={() => onPress(i)}
                    textStyle={styles.btnTextStyle}
                    containerStyle={styles.btnStyle}
                  />
                </ScrollView>
              </View>
              <View style={styles.main}>
                <View style={styles.mainLeft}>
                  <Text style={styles.text2}>{"Вес"}</Text>
                  <Text style={styles.text2}>{"Повтор"}</Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View style={styles.mainRight}>
                    {new Array(w.approach).fill(1).map((aa, ii) => (
                      <InputSecondary
                        key={`${i}/${ii}`}
                        text1={""}
                        text2={""}
                        disabled1
                        disabled2
                        containerStyle={!!ii && { marginLeft: 7 }}
                      />
                    ))}
                  </View>
                </ScrollView>
              </View>
            </View>
          ))}
          <ButtonPrimary
            fill
            text="Добавить упражнение"
            onPress={onAddExercise}
            style={[
              styles.button,
              !workouts.length && { marginTop: height * 0.3 },
            ]}
            textStyle={styles.buttonText}
          />
        </ScrollView>
      </View>

      <View style={{ marginBottom: 100 }}>
        {!!workouts.length && (
          <ButtonPrimary
            text="Утвердить"
            fill
            onPress={onSave}
            style={styles.saveBtn}
            textStyle={styles.saveBtnText}
          />
        )}
      </View>

      <Modal isVisible={typeof show === "number"} style={styles.modal}>
        <View style={styles.modalBox}>
          <View style={{ alignSelf: "flex-end" }}>
            <TouchableOpacity onPress={onHide}>
              <Icon
                width={14}
                height={14}
                tintColor={COLORS.RED}
                source={Assets.icons.close}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.modalMain}>
            <View style={styles.modalLeft}>
              <Text style={styles.modalTitle}>{"Кол-во подходов"}</Text>
              <InputPrimary
                value={approach}
                onChange={setApproach}
                disablePlaceholder
                inputStyle={styles.modalInput}
                containerStyle={styles.modalInputCont}
              />
            </View>
            <View style={styles.modalRight}>
              <Text style={styles.modalTitle}>{"Кол-во повторений"}</Text>
              <InputPrimary
                value={repetitions}
                onChange={setRepetitions}
                disablePlaceholder
                inputStyle={styles.modalInput}
                containerStyle={styles.modalInputCont}
              />
            </View>
          </View>
          {!!modalError && <Text style={styles.modalError}>{modalError}</Text>}
          <View style={{ marginTop: 20 }}>
            <ButtonPrimary
              text="Ок"
              onPress={onSet}
              loadingColor={COLORS.WHITE}
              style={styles.modalBtn}
              textStyle={styles.modalBtnText}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddWorkoutView;
