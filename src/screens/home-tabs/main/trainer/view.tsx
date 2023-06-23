import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { styles } from "./style";
import { ButtonPrimary, Header } from "../../../../components/common";
import { Assets } from "../../../../utils/requireAssets";
import { COLORS } from "../../../../constants/COLORS";
import { TrainerHooks } from "./hooks";
import { Env } from "../../../../../env";

const TrainerView = () => {
  const { trainer } = TrainerHooks();

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <Header />

      <View style={styles.headerContainer}>
        <Image style={styles.image} source={{ uri: trainer.avatar }} />

        <View style={styles.headerRight}>
          <View>
            <Text style={styles.textName}>{trainer.name}</Text>
            <Text style={styles.textOld}>{`${trainer.age} лет`}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ marginRight: 12 }}
              ></TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.textCart}>{'Специальность'}</Text>
          <View style={styles.about}>
            <Text style={styles.aboutText}>{trainer.speciality}</Text>
          </View>
          <Text style={styles.textCart}>{'Образование'}</Text>
          <View style={styles.about}>
            <Text style={styles.aboutText}>{trainer.education}</Text>
          </View>
          <Text style={styles.textCart}>{'Номер телефона'}</Text>
          <View style={styles.about}>
            <Text style={styles.aboutText}>{trainer.phoneNumber}</Text>
          </View>
          <Text style={styles.textCart}>{'О себе'}</Text>
        </View>
        <View style={styles.aboutView}>
          <Text style={styles.aboutText}>
            {trainer.aboutMe}
          </Text>
        </View>

        <View style={{ marginHorizontal: 15, marginBottom: 100 }}>
          <TouchableOpacity
            style={{ marginBottom: 40, marginTop: 20 }}
            activeOpacity={0.7}
          >
            <ButtonPrimary
              text="Оставить заявку"
              fill
              style={{
                borderRadius: 10,
                paddingVertical: 18,
                backgroundColor: COLORS.BLACK,
                borderWidth: 1,
                borderColor: COLORS.RED,

                marginBottom: 10,
              }}
              textStyle={{
                color: COLORS.RED,
                fontWeight: "700",
                fontSize: 15,
                lineHeight: 15,
              }}
              onPress={() => console.log("onPress")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginVertical: 10 }} activeOpacity={0.7}>
            <ButtonPrimary
              text="Планы питания"
              fill
              style={{
                borderRadius: 10,
                paddingVertical: 18,
                backgroundColor: COLORS.RED,
                marginBottom: 10,
              }}
              textStyle={{
                color: COLORS.WHITE,
                fontWeight: "700",
                fontSize: 15,
                lineHeight: 15,
              }}
              onPress={() => console.log("onPress")}
            />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <ButtonPrimary
              text="Планы тренировок"
              fill
              style={{
                borderRadius: 10,
                paddingVertical: 18,
                backgroundColor: COLORS.RED,
                marginBottom: 10,
              }}
              textStyle={{
                color: COLORS.WHITE,
                fontWeight: "700",
                fontSize: 15,
                lineHeight: 15,
              }}
              onPress={() => console.log("onPress")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default TrainerView;
