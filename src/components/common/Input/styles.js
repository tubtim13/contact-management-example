import { StyleSheet } from "react-native";
import color from "../../../assets/theme/color";

export default StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    height: 42,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  input: {
    flex: 1,
    width: '100%',
  },
  inputContainer: {
    paddingVertical: 10,
  },
  error: {
    color: color.dangerous,
    paddingTop: 10,
    fontSize: 12,
  },
});
