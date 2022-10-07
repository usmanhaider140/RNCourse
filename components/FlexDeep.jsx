import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

export default class FlexDeep extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item1}>
          <Text>1</Text>
        </View>
        <View style={styles.item2}>
          <Text>2</Text>
        </View>
        <View style={styles.item3}>
          <Text>3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 100,
    // flexDirection: "column-reverse",
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  item1: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    flexf: 1,
    height: 100,
    width: 100,
  },
  item2: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
  },
  item3: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
  },
});
