import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.lightGray,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    paddingVertical: 10,
    marginBottom: 10,
  },
});

export default Title;
