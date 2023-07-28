import { View, Text, ScrollView } from "react-native";
import Profile_btn from "../../../../components/common/ProfileBtn";
import { styles } from "./style";
import SafeAreaView from "react-native-safe-area-view";
import { ProfileHomeHooks } from "./hooks";

const ProfileHomeView = () => {
  const {
    onMyDataPress,
    onNotificationPress,
    onSettingsPress,
    onLogOut,
    isAdmin,
    user,
    onUsersPress,
  } = ProfileHomeHooks();

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.profileContainer}>
        <View style={{}}>
          <View style={styles.profileNameBox}>
            <Text style={styles.profileName}>{user?.name}</Text>
            {/* <Text style={styles.profileName}>{user.}</Text> */}
            <Text style={styles.profileId}>ID: {user?._id}</Text>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 130 }}>
          <Profile_btn onPress={onMyDataPress} title="Мои данные" />
          <Profile_btn title="Мои покупки" />
          <Profile_btn title="Мой тренер" />
          <Profile_btn onPress={onNotificationPress} title="Уведомления" />
          <Profile_btn onPress={onSettingsPress} title="Настройки приложения" />
          {!!isAdmin && (
            <Profile_btn title="Пользователи" onPress={onUsersPress} />
          )}
          <Profile_btn
            textStyle={styles.titleBtn}
            title="Выйти из аккаунта"
            hasIcon={false}
            onPress={onLogOut}
            // onPress={logOut}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileHomeView;
