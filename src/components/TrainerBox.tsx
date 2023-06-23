import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import { COLORS } from "../constants/COLORS";

interface IProps {
  avatar: ImageSourcePropType;
  name: string;
  speciality: string;
  age?: number;
  city: string;
  experience: number;
}

const TrainerBox = ({
  avatar,
  name,
  speciality,
  age,
  city,
  experience,
}: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image
          source={avatar}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.main}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.speciality}>{speciality}</Text>
          {age && <Text style={styles.age}>{`${age} лет`}</Text>}
        </View>
        <View style={styles.bottom}>
          <Text style={styles.city}>{city}</Text>
          <Text style={styles.experience}>{`Опыт - ${experience} лет`}</Text>
        </View>
      </View>
    </View>
  );
};

export default TrainerBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: COLORS.GREY2,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    overflow: "hidden",
    marginVertical: 16,
    backgroundColor: "pink",
  },
  main: {
    flex: 1,
    marginLeft: 16,
  },
  bottom: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 17,
    lineHeight: 23,
    fontWeight: "600",
    color: COLORS.WHITE,
  },
  speciality: {
    fontSize: 11,
    marginTop: 4,
    lineHeight: 13,
    fontWeight: "400",
    color: COLORS.WHITE,
  },
  age: {
    fontSize: 11,
    marginTop: 4,
    lineHeight: 13,
    fontWeight: "400",
    color: COLORS.WHITE,
  },
  city: {
    fontSize: 11,
    lineHeight: 13,
    fontWeight: "400",
    color: COLORS.WHITE,
  },
  experience: {
    fontSize: 11,
    lineHeight: 13,
    fontWeight: "700",
    color: COLORS.WHITE,
  },
});
