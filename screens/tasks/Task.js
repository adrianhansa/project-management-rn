import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = ({ task, slug, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TaskDetails", { id: task._id, slug })
        }
      >
        <Text style={styles.title}>{task.description}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: "crimson",
    borderWidth: 1,
  },
  title: { textAlign: "center", fontSize: 24 },
  delete: {},
});

export default Task;
