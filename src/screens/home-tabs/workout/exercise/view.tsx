import { View, Text, SafeAreaView } from "react-native";
import { Header } from "../../../../components/common";
import { WorkoutExerciseHooks } from "./hooks";
import { styles } from "./style";

const WorkoutExerciseView = () => {
  const { exercise } = WorkoutExerciseHooks();

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
        <Header title={exercise.title} />
      </View>
      <View>
        <View style={styles.videoContainer} />
        <Text style={styles.text}>{exercise.description}</Text>
        <Text style={styles.text}>{exercise.metadescription}</Text>
      </View>
    </View>
  );
};

export default WorkoutExerciseView;
