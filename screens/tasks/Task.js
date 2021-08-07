import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: { textAlign: "center", fontSize: 24 },
});

export default Task;
