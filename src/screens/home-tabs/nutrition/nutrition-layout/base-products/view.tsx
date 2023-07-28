import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ButtonPrimary, ButtonTabs } from "../../../../../components/common";
import { BaseProductsHooks } from "./hooks";
import { styles } from "./style";

const BaseProductsView = () => {
  const {
    activeTab,
    setActiveTab,
    products,
    selected,
    language,
    loading,
    productCategories,
    onSelect,
    onAdd,
  } = BaseProductsHooks();

  return (
    <View style={styles.container}>
      <View style={styles.scrollCont}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ButtonTabs
            marginLeft={20}
            active={activeTab}
            setActive={setActiveTab}
            containerStyle={styles.tabCont}
            textStyle={{ backgroundColor: "aquamarine" }}
            titles={[...productCategories.map((a) => a.name[language])]}
          />
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {products.map((a, i) => (
          <View style={styles.box} key={i}>
            <View style={styles.header}>
              <View>
                <Text style={styles.text1}>{a.name[language]}</Text>
                <Text style={styles.text2}>{"на 100гр. продукта"}</Text>
              </View>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => onSelect(a)}
              >
                {selected.find((s) => s._id === a._id) && (
                  <View style={styles.checkboxFilled} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.main}>
              <View>
                <Text style={styles.text3}>
                  {"Б - "}
                  <Text style={styles.text4}>{`${a.protein} гр`}</Text>
                </Text>
                <Text style={styles.text3}>
                  {"Ж - "}
                  <Text style={styles.text4}>{`${a.oil} гр`}</Text>
                </Text>
                <Text style={styles.text3}>
                  {"У - "}
                  <Text style={styles.text4}>{`${a.carb} гр`}</Text>
                </Text>
              </View>
              <Text style={styles.text5}>{`${a.calories} каллорий`}</Text>
            </View>
          </View>
        ))}

        <ButtonPrimary
          fill
          onPress={onAdd}
          loading={loading}
          style={styles.btn}
          textStyle={styles.btnText}
          disabled={!!!selected.length}
          text="Добавить в “ Мои продукты “"
        />

        <View style={{ marginBottom: 100 }} />
      </ScrollView>
      <View style={styles.createButtonContainer}>
        {/* <ButtonPrimary text="Добавить упражнения" onPress={onCreate} /> */}
      </View>
    </View>
  );
};

export default BaseProductsView;
