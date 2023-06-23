import { View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Box, ButtonTabs, Header } from "../../../../components/common";
import { ExercisesHooks } from "./hooks";
import { Env } from "../../../../../env";

const ExercisesView = () => {
  const {
    activeCategory,
    setActiveCategory,
    activeSubCategory,
    setActiveSubCategory,
    onPress,
    exerciseCategories,
    language,
    exercises,
  } = ExercisesHooks();

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <View style={styles.header}>
        <Header title="База упражнений" />
      </View>

      <ButtonTabs
        secondary
        active={activeCategory}
        setActive={setActiveCategory}
        containerStyle={styles.categoryBtnCont}
        titles={[...exerciseCategories.map((a) => a.name[language])]}
      />
      <ButtonTabs
        active={activeSubCategory}
        setActive={setActiveSubCategory}
        containerStyle={styles.subCategoryBtnCont}
        titles={[
          ...exerciseCategories[activeCategory].children.map(
            (a) => a.name[language]
          ),
        ]}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          {exercises.map((exercise, i) => (
            <TouchableOpacity
              key={exercise._id}
              activeOpacity={0.7}
              onPress={() => onPress(i)}
            >
              <Box
                title={exercise.title}
                containerStyle={{ marginTop: 10 }}
                cover={{ uri: exercise.image }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ExercisesView;
