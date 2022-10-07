import { Button, StyleSheet, Text, View } from "react-native";
import Main from "./screens/main";
export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor: "#403D58",
    backgroundColor: "#011627",
    alignItems: "center",
  },
});
