import { View, Text, TouchableOpacity, LayoutAnimation } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";

import SafeAreaView from "react-native-safe-area-view";
import { Header } from "../../../../components/common";
import Active_Button from "../../../../components/common/Active_Buutton";

const Settings_Screen = () => {
  const [shouldShow, setShouldShow] = useState(true);
  const [drop, setDrop] = useState("Русский язык");
  const [state, setState] = useState(true);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Настройки" />
      <Text style={[styles.textOne, { marginBottom: 10 }]}>Язык</Text>
      <>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.animated}
          onPress={() => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut
            );
            setShouldShow(!shouldShow);
          }}
        >
          <Text style={styles.textOne}>{drop}</Text>
          {/* {!shouldShow ? <ArrowDown /> : <ArrowUp />} */}
        </TouchableOpacity>
        <View style={{}}>
          {!shouldShow ? (
            <View style={styles.animatedOne}>
              <TouchableOpacity
                onPress={() => setDrop("Русский")}
                style={styles.btnLanguage}
              >
                <Text style={styles.textOne}>Русский</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnLanguage}
                onPress={() => setDrop("English")}
              >
                <Text style={styles.textOne}>English</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnLanguage}
                onPress={() => setDrop("O’zbek tili")}
              >
                <Text style={styles.textOne}>O’zbek tili</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </>
      <View style={styles.activeBox}>
        <Text style={styles.activeText}>Push-уведомления</Text>
        <Active_Button />
      </View>
    </View>
  );
};

export default Settings_Screen;
