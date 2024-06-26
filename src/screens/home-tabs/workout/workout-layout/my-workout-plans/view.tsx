import { View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Assets } from "../../../../../utils/requireAssets";
import {
  Box,
  ButtonPrimary,
  EmptyComponent,
} from "../../../../../components/common";
import { MyWorkoutPlansHooks } from "./hooks";

const MyWorkoutPlansView = () => {
  const {
    onPress,
    onCreate,
    onRemove,
    workoutPlans,
    loading,
    show,
    setShow,
    isSuperAdmin,
  } = MyWorkoutPlansHooks();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 20, marginBottom: 10 }}>
          {!!workoutPlans?.length ? (
            workoutPlans.map((w, i) => (
              <TouchableOpacity
                key={w._id}
                onPress={() => onPress(w)}
                activeOpacity={0.6}
                style={{ marginBottom: 10 }}
              >
                <Box
                  dots
                  dotsLoading={loading && loading[i]}
                  show={show && show[i]}
                  setShow={() => setShow({ [i]: !(show && show[i]) })}
                  onRemove={() => onRemove(i)}
                  cover={Assets.images.cover1}
                  title={w.title}
                  text={w.description}
                  right={w.price ? `${w.price}` : "Бесплатно"}
                  containerStyle={{ marginTop: 10 }}
                />
              </TouchableOpacity>
            ))
          ) : (
            <EmptyComponent />
          )}
        </View>
      </ScrollView>
      {isSuperAdmin && (
        <View style={{ paddingBottom: 90, paddingTop: 20 }}>
          <ButtonPrimary
            fill
            onPress={onCreate}
            style={styles.button}
            text="Составить свою программу"
            textStyle={styles.buttonText}
          />
        </View>
      )}
    </View>
  );
};

export default MyWorkoutPlansView;
