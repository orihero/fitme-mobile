import {
  View,
  Text,
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import { COLORS } from "../../constants/COLORS";
import { ButtonPrimary, Icon } from ".";
import { Assets } from "../../utils/requireAssets";

interface IProps {
  multiline?: boolean;
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  placeholderColor?: string;
  disablePlaceholder?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  onSearch?: () => void;
  keyboardType?: KeyboardTypeOptions;
}

const InputPrimary = ({
  value,
  onChange,
  multiline,
  placeholder = "Enter text...",
  placeholderColor = COLORS.GREY5,
  disablePlaceholder,
  containerStyle,
  inputStyle,
  onSearch,
  keyboardType = "default",
}: IProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        multiline={multiline}
        value={value}
        onChangeText={onChange}
        placeholder={!disablePlaceholder ? placeholder : undefined}
        placeholderTextColor={placeholderColor}
        textAlignVertical={"center"}
        style={[
          styles.input,
          inputStyle,
          multiline && { minHeight: 100, textAlignVertical: "top" },
        ]}
        keyboardType={keyboardType}
      />
      {onSearch && (
        <ButtonPrimary
          style={{
            padding: 0,
            backgroundColor: "transparent",
          }}
          icon={<Icon source={Assets.icons.search} />}
          onPress={onSearch}
        />
      )}
    </View>
  );
};

export default InputPrimary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 4,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderRadius: 4,
    backgroundColor: COLORS.GREEN,
  },
});
