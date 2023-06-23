import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  ButtonPrimary,
  ButtonTabs,
  Header,
  InputPrimary,
} from "../../../../components/common";
import { PRODUCT_AMOUNT } from "../../../../constants/AMOUNT";
import { COLORS } from "../../../../constants/COLORS";
import { AddProductsHooks } from "./hooks";
import { styles } from "./style";

const AddProductsView = () => {
  const {
    searchValue,
    setSearchValue,
    activeTab,
    setActiveTab,
    activeCategory,
    setActiveCategory,
    products,
    selected,
    onSearch,
    onSelect,
    onAdd,
    language,
    productCategories,
  } = AddProductsHooks();

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <Header />

      <InputPrimary
        value={searchValue}
        onChange={setSearchValue}
        onSearch={onSearch}
        placeholder={"Поиск"}
        inputStyle={styles.input}
        placeholderColor={COLORS.WHITE}
        containerStyle={styles.inputCont}
      />

      <ButtonTabs
        secondary
        titles={["Мои продукты", "База продуктов"]}
        active={activeTab}
        setActive={setActiveTab}
        containerStyle={styles.tab1Cont}
      />

      <View style={styles.scrollCont}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ButtonTabs
            marginLeft={15}
            active={activeCategory}
            setActive={setActiveCategory}
            containerStyle={styles.tab2Cont}
            titles={[...productCategories.map((a) => a.name[language])]}
          />
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {products.map((p, pI) => (
          <View style={styles.box} key={`${p._id}/${pI}`}>
            <View style={styles.header}>
              <View>
                <Text style={styles.text1}>{p.name[language]}</Text>
                <Text
                  style={styles.text2}
                >{`на ${PRODUCT_AMOUNT}гр. продукта`}</Text>
              </View>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => onSelect(p)}
              >
                {selected.find((s) => s._id === p._id) && (
                  <View style={styles.checkboxFilled} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.main}>
              <View>
                <Text style={styles.text3}>
                  {"Б - "}
                  <Text style={styles.text4}>{`${p.protein} гр`}</Text>
                </Text>
                <Text style={styles.text3}>
                  {"Ж - "}
                  <Text style={styles.text4}>{`${p.oil} гр`}</Text>
                </Text>
                <Text style={styles.text3}>
                  {"У - "}
                  <Text style={styles.text4}>{`${p.carb} гр`}</Text>
                </Text>
              </View>
              <Text style={styles.text5}>{`${p.calories} каллорий`}</Text>
            </View>
          </View>
        ))}

        <ButtonPrimary
          fill
          text="Добавить"
          onPress={onAdd}
          style={styles.btn}
          textStyle={styles.btnText}
          loadingColor={COLORS.WHITE}
          disabled={!selected.length}
        />

        <View style={{ marginBottom: 100 }} />
      </ScrollView>
    </View>
  );
};

export default AddProductsView;
