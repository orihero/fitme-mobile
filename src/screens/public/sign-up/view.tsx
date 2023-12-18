import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import { COLORS } from "../../../constants/COLORS";
import { SignUpHooks } from "./hooks";
import { ButtonPrimary, InputPrimary } from "../../../components/common";

const SignUpView = () => {
  const { loading, name, setName, phone, setPhone, onPress, onLoginPress } =
    SignUpHooks();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>Регистрация</Text>
        <InputPrimary
          placeholder="Как вас зовут?"
          placeholderColor="#404B52"
          value={name}
          onChange={(value) => setName(value)}
          containerStyle={{
            backgroundColor: COLORS.GREY4,
            marginBottom: 10,
            marginTop: 30,
          }}
          inputStyle={{
            backgroundColor: COLORS.GREY4,
            color: COLORS.GREY,
          }}
        />
        <InputPrimary
          placeholder="Ведите вашу почту"
          placeholderColor="#404B52"
          value={phone}
          onChange={(value) => setPhone(value)}
          containerStyle={{
            backgroundColor: COLORS.GREY4,
            marginBottom: 10,
          }}
          inputStyle={{
            backgroundColor: COLORS.GREY4,
            color: COLORS.GREY,
          }}
        />
        <Text style={styles.text}>
          Регистрируясь, вы принимаете наши Правила и Условия
        </Text>
        <ButtonPrimary
          text="Зарегистрироваться"
          fill
          loading={loading}
          loadingColor={COLORS.WHITE}
          style={{
            borderRadius: 4,
            paddingVertical: 18,
            backgroundColor: COLORS.BLACK,
            marginBottom: 10,
            marginTop: 20,
          }}
          textStyle={{
            color: COLORS.WHITE,
            fontWeight: "700",
            fontSize: 15,
            lineHeight: 15,
          }}
          onPress={onPress}
        />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.textFooter}>{"Если у вас уже есть аккаунт:"}</Text>
        <ButtonPrimary
          text="Войти"
          fill
          loading={loading}
          loadingColor={COLORS.WHITE}
          style={{
            borderRadius: 4,
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
          onPress={onLoginPress}
        />
      </View>
    </View>
  );
};

export default SignUpView;
