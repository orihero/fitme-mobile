import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TrainerBox } from "../../../../components";
import {
  ButtonTabs,
  Header,
  InputPrimary,
} from "../../../../components/common";
import { COLORS } from "../../../../constants/COLORS";
import { UsersHooks } from "./hooks";
import { styles } from "./style";

import { useRoute, RouteProp } from "@react-navigation/native";
import { PROFILE } from "../../../../navigation/ROUTES";
import { ProfileStackParamList } from "..";

const UsersView = () => {
  const { search, setSearch, users } = UsersHooks();
  return (
    <View style={styles.container}>
      <SafeAreaView />

      <Header title={"Пользователи"} />

      <InputPrimary
        value={search}
        onChange={(value) => setSearch(value)}
        placeholder={"Поиск"}
        placeholderColor={COLORS.WHITE}
        containerStyle={{
          backgroundColor: COLORS.GREY3,
          marginVertical: 10,
          borderRadius: 10,
        }}
        inputStyle={{
          backgroundColor: COLORS.GREY3,
          color: COLORS.WHITE,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 100 }}>
          {users.map((user, i) => (
            <TouchableOpacity
              key={user._id}
              activeOpacity={0.7}
              style={{ marginBottom: 10 }}
            >
              <TrainerBox
                id={user._id}
                name={user.name}
                city={user.phoneNumber}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default UsersView;
