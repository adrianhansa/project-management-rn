import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Task from "./Task";

const Tasks = ({ navigation, slug, tasks }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Task task={item} />}
        keyExtractor={(item) => item._id}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("AddTask", { slug: slug, navigation: navigation })
        }
      >
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
