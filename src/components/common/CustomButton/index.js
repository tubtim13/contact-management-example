import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import color from "../../../assets/theme/color";
import styles from "./styles";

const CustomButton = ({
  disable,
  loading,
  title,
  secondary,
  primary,
  danger,
  onPress,
}) => {
  const getBgColor = () => {
    if (disable) {
      return color.gray;
    }
    if (secondary) {
      return color.secondary;
    }
    if (danger) {
      return color.dangerous;
    }
    if (primary) {
      return color.primary;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      style={[styles.wrapper, { backgroundColor: getBgColor() }]}
    >
      <View style={styles.loaderSection}>
        {loading&&<ActivityIndicator color={color.primary}/>}
        {title && (
          <Text style={{ color: disable ? color.back : color.white }}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
