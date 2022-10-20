import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const PrimaryButton = ({ children, onClick }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonPressable, styles.pressed]
            : styles.buttonPressable
        }
        onPress={onClick}
        android_ripple={{ color: "#222" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#403D58",
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: "black", // iOS
    shadowOffset: { width: 0, height: 2 }, // iOS
    shadowRadius: 6, // iOS
    shadowOpacity: 0.26, // iOS
    elevation: 10, // Android
    width: 200,
    overflow: "hidden",
  },
  buttonPressable: {
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default PrimaryButton;
