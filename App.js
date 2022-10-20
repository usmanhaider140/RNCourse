import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import Colors from "./constants/colors";
import GameScreen from "./screens/App2/GameScreen";
import StartGameScreen from "./screens/App2/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userChoice={userNumber} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/Images/bg.jpg")}
        style={styles.bg}
        imageStyle={{ opacity: 0.5 }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
  },
});
