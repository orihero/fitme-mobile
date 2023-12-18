import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { styles } from "./style";
import { Header } from "../../../../components/common";
import { ExerciseHooks } from "./hooks";
// import YouTube from "react-native-youtube";
import Youtube from "react-native-youtube-iframe";

function youtube_parser(url: string) {
  var regExp =
    /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  var match = url.match(regExp);
  return match[1];
}

const ExerciseView = () => {
  const { exercise } = ExerciseHooks();

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
        <Header title={exercise.title} />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
        <View>
          <Youtube
            key={exercise.video}
            height={300}
            videoId={youtube_parser(exercise.video)}
          />
          <Text style={styles.text}>{exercise.description}</Text>
          {/* <Text style={styles.text}>{exercise.metadescription}</Text> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default ExerciseView;
