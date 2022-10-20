// GameScreen.jsx
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import NumberContainer from "../../components/Game/NumberContainer";
import Title from "../../components/UI/Title";

function generateRandomBetween(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({ userChoice }) => {
  const guess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(guess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});

export default GameScreen;
