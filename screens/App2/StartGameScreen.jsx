// StartGameScreen.jsx
import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Text } from "react-native";
import PrimaryButton from "../../components/UI/PrimaryButton";
import Colors from "../../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredValue, setEnteredValue] = useState("");

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
    setEnteredValue("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        value={enteredValue}
        onChangeText={(text) => setEnteredValue(text)}
        maxLength={2}
        keyboardType={"numeric"}
      />
      <PrimaryButton onClick={resetInputHandler}>Reset</PrimaryButton>
      <PrimaryButton onClick={confirmInputHandler}>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginHorizontal: 24,
    alignItems: "center",
    borderRadius: 8,
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.secondary,
    elevation: 10, // Android
    shadowColor: Colors.black, // iOS
    shadowOffset: { width: 0, height: 2 }, // iOS
    shadowRadius: 6, // iOS
    shadowOpacity: 0.26, // iOS
  },
  inputText: {
    backgroundColor: Colors.white,
    color: Colors.primary,
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 1,
    width: 200,
    textAlign: "center",
  },
});

export default StartGameScreen;
