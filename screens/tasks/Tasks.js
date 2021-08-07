import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Task from "./Task";

const Tasks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <Task />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: { textAlign: "center", fontSize: 24 },
});

export default Tasks;
