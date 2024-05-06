import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ButtonPrimary, ButtonTabs } from "../../../../../components/common";
import Modal from "./modal";
import { MyProductsHooks } from "./hooks";
import { styles } from "./style";

const MyProductsView = () => {
  const {
    activeTab,
    setActiveTab,
    name,
    setName,
    calories,
    setCalories,
    protein,
    setProtein,
    oil,
    setOil,
    carb,
    setCarb,
    products,
    loading,
    show,
    modalLoading,
    isModalBtnDisabled,
    language,
    productCategories,
    onCreate,
    onRemove,
    onShow,
    onHide,
    onPress,
    onAdd,
  } = MyProductsHooks();
  console.log("RENDERING");
  
  return (
    <View style={styles.container}>
      <View style={styles.scrollCont}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => setActiveTab(null)}>
            <Text style={styles.greenText}>{"Мои блюда"}</Text>
            {activeTab === null && <View style={styles.greenLine} />}
          </TouchableOpacity>

          <ButtonTabs
            marginLeft={10}
            // @ts-ignore
            active={activeTab}
            setActive={setActiveTab}
            containerStyle={styles.tabCont}
            textStyle={{ backgroundColor: "aquamarine" }}
            titles={[...productCategories.map((a) => a.name[language])]}
          />
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {activeTab === null && (
          <ButtonPrimary
            fill
            onPress={onCreate}
            style={styles.button}
            text="Сделать новое блюдо"
            textStyle={styles.buttonText}
          />
        )}

        {products.map((a, i) => (
          <View style={styles.box} key={i}>
            <View style={styles.header}>
              <View>
                <Text style={styles.text1}>{a.name[language]}</Text>
                <Text style={styles.text2}>{"на 100гр. продукта"}</Text>
              </View>
              <ButtonPrimary
                text="Удалить"
                style={styles.deleteBtn}
                textStyle={styles.deleteBtnText}
                onPress={() => !loading && onRemove(a)}
                loading={!!(loading && loading._id === a._id)}
              />
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

        {activeTab !== null && (
          <ButtonPrimary
            fill
            onPress={onShow}
            style={styles.btn}
            textStyle={styles.btnText}
            text="Добавить свой продукт"
          />
        )}

        <View style={{ marginBottom: 100 }} />
      </ScrollView>

      <Modal
        categories={productCategories}
        activeTab={activeTab}
        show={show}
        modalLoading={modalLoading}
        isModalBtnDisabled={isModalBtnDisabled}
        name={name}
        setName={setName}
        calories={calories}
        setCalories={setCalories}
        protein={protein}
        setProtein={setProtein}
        oil={oil}
        setOil={setOil}
        carb={carb}
        setCarb={setCarb}
        onHide={onHide}
        onPress={onPress}
        onAdd={onAdd}
      />
    </View>
  );
};

export default MyProductsView;
