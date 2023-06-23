import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { SignInHooks } from "./hooks";
import { ButtonPrimary, InputPrimary } from "../../../components/common";
import { COLORS } from "../../../constants/COLORS";

const SignInView = () => {
  const { onRegisterPress, onPress, loading, phone, setPhone } = SignInHooks();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>Авторизация</Text>
        <InputPrimary
          placeholder="Введите ваш номер телефона"
          placeholderColor="#404B52"
          value={phone}
          onChange={(value) => setPhone(value)}
          containerStyle={{
            backgroundColor: COLORS.GREY4,
            marginVertical: 25,
          }}
          inputStyle={{
            backgroundColor: COLORS.GREY4,
            color: COLORS.GREY,
          }}
        />
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
        <Text style={styles.textFooter}>Авторизоваться при помощи</Text>
        <View style={{ alignItems: "center" }}>
          <View style={styles.iconContainer}>
            {/* <TouchableOpacity activeOpacity={0.7}>
              <AppleIcon />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <FacebookIcon />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <GoogleIcon />
            </TouchableOpacity> */}
          </View>
        </View>
        <Text style={styles.text}>или</Text>
        <TouchableOpacity
          onPress={onRegisterPress}
          activeOpacity={0.6}
          style={{
            borderBottomWidth: 1,
            borderColor: COLORS.BLACK,
          }}
        >
          <Text style={styles.textOne}>Зарегистрируйтесь</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInView;
