import { StyleSheet, Text, View } from "react-native";
import Colors from "./../../constants/color";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    overflow: "hidden",
    textAlign: "center",
    borderWidth: 10,
    borderColor: Colors.primary600,
    padding: 12,
    borderRadius: 2,
    backgroundColor: Colors.primary600,
  },
});
