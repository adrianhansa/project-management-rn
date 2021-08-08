import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Task from "./Task";

const Tasks = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <Task />
      <TouchableOpacity onPress={() => navigation.navigate("AddTask")}>
        <View>
          <Text>Add Task</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: { textAlign: "center", fontSize: 24 },
});

export default Tasks;
