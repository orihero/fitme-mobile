import { View, Text, SafeAreaView } from "react-native";
import { styles } from "./style";
import { Header } from "../../../../components/common";
import { ExerciseHooks } from "./hooks";
// import YouTube from "react-native-youtube";
import Youtube from "react-native-youtube-iframe";

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
        <Youtube height={300} videoId={youtube_parser(exercise.video)} />
        <Text style={styles.text}>{exercise.description}</Text>
        <Text style={styles.text}>{exercise.metadescription}</Text>
      </View>
    </View>
  );
};

export default ExerciseView;
