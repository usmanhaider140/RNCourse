import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";

import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";

const Main = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModelVisible, setIsModeVisible] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { value: enteredGoalText, key: Math.random().toString() },
    ]);
    removeModel();
  };

  const removeModel = () => {
    setIsModeVisible(false);
  };

  const removeGoalHandler = (goalId) => {
    console.log(goalId);
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== goalId);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.flexContainer}>
        <Button title="Add New Goal" onPress={() => setIsModeVisible(true)} />
        <GoalInput
          visible={isModelVisible}
          onClose={removeModel}
          onAddGoal={addGoalHandler}
        />
        <View style={styles.listContainer}>
          <Text style={styles.listText}>List of Goals</Text>
          <FlatList
            data={courseGoals}
            renderItem={(goalData) => (
              <GoalItem goalData={goalData} onRemoveGoal={removeGoalHandler} />
            )}
            keyExtractor={(item, index) => item.key}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    width: "100%",
    alignItems: "center",
    flex: 1,
  },

  listContainer: {
    width: "100%",
    padding: 10,
    flex: 10,
  },

  listText: {
    color: "#fff",
  },
});

export default Main;
