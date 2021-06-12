import React from "react";
import { View, TextInput, Text } from "react-native";
import color from "../../../assets/theme/color";
import styles from "./styles";

const Input = ({
  value,
  onChangeText,
  style,
  label,
  icon,
  iconPosition,
  error,
  keyboardType,
  placeholder,
  secureTextEntry
}) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === "Left") {
        return "row";
      } else if (iconPosition === "Right") {
        return "row-reverse";
      }
    }
  };

  const getBorderColor = () => {
    if (focused) {
      return color.primary;
    }
    if (error) {
      return color.dangerous;
    } else {
      return color.gray;
    }
  };


  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          { alignItems: icon ? "center" : "baseline" },
          { borderColor: getBorderColor(), flexDirection: getFlexDirection() },
        ]}
      >
        <View>{icon && icon}</View>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          style={[styles.input, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
