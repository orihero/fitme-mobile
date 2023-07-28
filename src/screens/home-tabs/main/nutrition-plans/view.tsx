import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import {
  ButtonPrimary,
  ButtonTabs,
  Header,
} from "../../../../components/common";
import { NutritionPlansHooks } from "./hooks";
import { NutritionBox } from "../../../../components";

const NutritionPlansView = () => {
  const { state, setState, onIndividualPress, subCategory, setSubCategory } =
    NutritionPlansHooks();

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <Header title="Планы Питания" />

      <ButtonTabs
        active={state}
        setActive={setState}
        titles={["Жиросжигание", "Массанабор"]}
        primary
        containerStyle={{
          justifyContent: "center",
          marginVertical: 15,
        }}
        scroll={false}
      />
      {state !== 1 && (
        <ButtonTabs
          active={subCategory}
          setActive={setSubCategory}
          titles={["2 приема пищи", "3 приема пищи"]}
          secondary
          containerStyle={{
            justifyContent: "center",
            backgroundColor: "transparent",
            marginBottom: 10,
          }}
        scroll={false}
        />
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 40 }}>
          <TouchableOpacity style={{ marginVertical: 10 }} activeOpacity={0.7}>
            <NutritionBox simple />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginVertical: 10 }} activeOpacity={0.7}>
            <NutritionBox simple />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{ marginBottom: 90 }}>
        <ButtonPrimary
          text="Заказать План ( индивидуальный )"
          fill
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={onIndividualPress}
        />
      </View>
    </View>
  );
};

export default NutritionPlansView;
