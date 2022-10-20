import { Button, StyleSheet, Text, View } from "react-native";

export default function Card({ title }) {
  return (
    <View style={styles.card}>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.para}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit minus,
        tempora accusantium sint earum nam illum, suscipit voluptatem labore
        voluptate velit autem officia unde delectus assumenda distinctio ex!
        Provident, ex?
      </Text>
      <Button title="Tap me! ok" style={{ backgroundColor: "red" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    backgroundColor: "#ff00ff",
    color: "white",
    padding: 10,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    overflow: "hidden",
    width: "80%",
  },
  para: {
    fontSize: 15,
    color: "black",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cardButton: {
    backgroundColor: "#fcfcfc",
    color: "white",
    padding: 10,
    fontWeight: "bold",
    width: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});
