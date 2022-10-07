import {
  View,
  Button,
  StyleSheet,
  TextInput,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

const GoalInput = ({ onAddGoal, visible, onClose }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  return (
    <Modal visible={visible} transparent animationType={"slide"}>
      <View style={styles.flexInputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          placeholder="Your Course goal!"
          onChangeText={(text) => setEnteredGoal(text)}
          value={enteredGoal}
          ds
          style={styles.flexInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="ADD Goal"
              color={"#403D58"}
              onPress={() => {
                onAddGoal(enteredGoal);
                setEnteredGoal("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  flexInputContainer: {
    // flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    height: 300,
    marginTop: 190,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#FC7753",
    padding: 5,
    borderRadius: 20,
  },
  image: {
    width: 170,
    height: 170,
  },
  flexInput: {
    width: "90%",
    borderRadius: 5,
    justifyContent: "space-between",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: "#ccc",
    color: "#403D58",
    backgroundColor: "#fafafa",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    borderRadius: 50,
    width: "40%",
    marginHorizontal: 5,
  },
});

export default GoalInput;
