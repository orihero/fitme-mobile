import { View, Text, SafeAreaView } from "react-native";
import { styles } from "./style";
import { Header } from "../../../../components/common";
import { ExerciseHooks } from "./hooks";
import YouTube from "react-native-youtube";

function youtube_parser(url: string) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : "9fAuotkeVsk";
}

const ExerciseView = () => {
  const { exercise } = ExerciseHooks();

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
        <Header title={exercise.title} />
      </View>
      <View>
        {/* <View style={styles.videoContainer} /> */}
        <YouTube
          style={{ alignSelf: "stretch", height: 300 }}
          videoId={youtube_parser(exercise.video)}
          apiKey="AIzaSyCuNHo7MqxoBr0uB9X5jnTH-hnEavoqyZ0"
        />
        <Text style={styles.text}>{exercise.description}</Text>
        <Text style={styles.text}>{exercise.metadescription}</Text>
      </View>
    </View>
  );
};

export default ExerciseView;
