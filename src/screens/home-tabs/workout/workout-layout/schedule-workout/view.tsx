import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import {
  ButtonPrimary,
  EmptyComponent,
  Icon,
} from "../../../../../components/common";
import Modal from "./modal";
import { COLORS } from "../../../../../constants/COLORS";
import { Workout } from "../../../../../types";
import { Assets } from "../../../../../utils/requireAssets";
import { ScheduleWorkoutHooks } from "./hooks";
import { styles } from "./style";
import tempData from "./workout.json";

const ScheduleWorkoutView = () => {
  const {
    data,
    show,
    setShow,
    showModal,
    setShowModal,
    modalLoading,
    onPress,
    onHide,
    onFinish,
    onExrecisePress,
  } = ScheduleWorkoutHooks();
  let showData = !data ? tempData : data;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.topTitle}>{showData.plan.title}</Text>

        {showData.plan.workouts &&
          showData.plan.workouts.length &&
          showData.plan.workouts.map((ww, ii) => (
            <View style={{ flexDirection: "row" }}>
              <View style={styles.workoutStake}>
                <TouchableWithoutFeedback
                  onPress={() => setShow({ [ii]: !show[ii] })}
                >
                  <View style={[styles.titleColumn, { marginTop: 10 }]}>
                    <Text style={styles.title}>{`Тренировка ${ii + 1}`}</Text>
                    <Icon
                      source={Assets.icons.arrow}
                      width={6}
                      height={9}
                      style={{
                        marginLeft: 8,
                        alignSelf: "center",
                        transform: [{ rotate: show[ii] ? "90deg" : "-90deg" }],
                      }}
                    />
                  </View>
                </TouchableWithoutFeedback>
                {show[ii] && (
                  <>
                    {ww.map((w, i) => (
                      <TouchableOpacity
                        key={`${ii}/${w.exercise?._id}`}
                        style={[
                          styles.column,
                          styles.itemsStart,
                          !i && { borderTopWidth: 0 },
                        ]}
                        onPress={() => onExrecisePress(w.exercise)}
                      >
                        <Text style={styles.text2}>{w.exercise?.title}</Text>
                      </TouchableOpacity>
                    ))}
                  </>
                )}
              </View>
              <ScrollView
                key={ii}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={[
                    styles.main,
                    !show[ii] && {
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    },
                  ]}
                >
                  <View style={styles.setsStake}>
                    <View style={styles.titleColumn}>
                      <Text style={[styles.text, { color: COLORS.GREEN2 }]}>
                        {"Сеты"}
                      </Text>
                    </View>
                    {show[ii] && (
                      <>
                        {ww.map((w: Workout, i) => (
                          <View
                            key={`${ii}/${i}/${w.exercise?._id}`}
                            style={[styles.column, !i && { borderTopWidth: 0 }]}
                          >
                            <Text
                              style={[styles.text2, { color: 'white' }]}
                            >
                              {`${w?.approach}x${w?.repetitions}`}
                            </Text>
                          </View>
                        ))}
                      </>
                    )}
                  </View>

                  {new Array(4).fill(1).map((a, i) => (
                    <TouchableWithoutFeedback
                      onPress={() => onPress(ii, showData.activeWeek + i)}
                      key={`${ii}/${showData.activeWeek + i}/s/${
                        showData.plan?._id
                      }`}
                    >
                      <View style={styles.weekStake}>
                        <View style={styles.titleColumn}>
                          <Text style={styles.text}>{`Неделя ${
                            showData.activeWeek + i + 1
                          }`}</Text>
                        </View>
                        {show[ii] && (
                          <>
                            {showData.plan.workouts[ii].map((w, iii) => {
                              let str = "-";
                              const { repeat, weight } =
                                showData.results[ii][showData.activeWeek + i][
                                  iii
                                ][
                                  showData.results[ii][showData.activeWeek + i][
                                    iii
                                  ].length - 1
                                ];
                              if (weight && repeat) {
                                str = `${weight}/${repeat}`;
                              }

                              return (
                                <View
                                  style={[
                                    styles.column,
                                    !iii && { borderTopWidth: 0 },
                                  ]}
                                  key={`${ii}/${
                                    showData.activeWeek + i
                                  }/${iii}/${w.exercise?._id}}`}
                                >
                                  <Text
                                    style={[
                                      styles.text2,
                                      {
                                        color:
                                          str === "-"
                                            ? COLORS.GREY11
                                            : COLORS.WHITE,
                                      },
                                    ]}
                                  >
                                    {str}
                                  </Text>
                                </View>
                              );
                            })}
                          </>
                        )}
                      </View>
                    </TouchableWithoutFeedback>
                  ))}
                </View>
              </ScrollView>
            </View>
          ))}
        <Text style={styles.prompt}>
          Выберите неделю, чтобы изменить статус прогресса
        </Text>
        {!!data && (
          <View style={styles.btnRow}>
            <ScrollView horizontal>
              {new Array(Math.round(showData.plan.week / 4))
                .fill(1)
                .map((a, i) => (
                  <ButtonPrimary
                    key={`btn-${i}`}
                    textStyle={
                      showData.activeWeek === i * 4
                        ? styles.btnText2
                        : styles.btnText1
                    }
                    text={`Неделя ${i * 4 + 1}-${i * 4 + 4}`}
                    style={
                      !!!i ? styles.btn1 : { ...styles.btn1, ...styles.ml8 }
                    }
                  />
                ))}
            </ScrollView>
          </View>
        )}

        {/* {!!data && (
          <ButtonPrimary
            multiline
            style={styles.btn2}
            text="Статус выполнения"
            textStyle={styles.btnText3}
            onPress={() => setShowModal(true)}
          />
        )} */}
        {!data ? <EmptyComponent /> : <></>}
      </View>

      <Modal
        show={showModal}
        loading={modalLoading}
        onHide={onHide}
        onPress={onFinish}
      />
    </View>
  );
};

export default ScheduleWorkoutView;
