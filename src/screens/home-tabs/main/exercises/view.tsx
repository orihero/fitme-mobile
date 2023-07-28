import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import {
  Box,
  ButtonPrimary,
  ButtonTabs,
  Header,
} from "../../../../components/common";
import { ExercisesHooks } from "./hooks";
import { styles } from "./style";

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
    onCreate,
    isSuperAdmin,
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
        titles={
          exerciseCategories
            ? [
                ...exerciseCategories[activeCategory]?.children.map(
                  (a) => a.name[language]
                ),
              ]
            : []
        }
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
      {isSuperAdmin && (
        <View style={styles.createButtonContainer}>
          <ButtonPrimary text="Добавить упражнения" onPress={onCreate} />
        </View>
      )}
    </View>
  );
};

export default ExercisesView;
