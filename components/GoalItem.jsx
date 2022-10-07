import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function GoalItem({ goalData, onRemoveGoal }) {
  console.log(goalData);
  return (
    <View style={styles.listItem}>
      <Pressable
        // android_ripple={{ color: "#5CAB7D" }}
        onPress={() => onRemoveGoal(goalData.item.key)}
        style={({ pressed }) => {
          return pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goalText}>
          {goalData.index + 1 + " - " + goalData.item.value}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#403D58",
    borderRadius: 5,
    marginVertical: 10,
  },
  pressedItem: {
    backgroundColor: "#FF0022",
  },
  goalText: {
    paddingHorizontal: 10,
    color: "#fff",
    paddingVertical: 5,
    fontWeight: "bold",
    letterSpacing: 1.45,
    fontSize: 14,
    textTransform: "capitalize",
  },
});
