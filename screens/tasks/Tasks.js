import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../redux/actions/taskActions";

const Tasks = ({ navigation, slug }) => {
  const dispatch = useDispatch();

  const { success, tasks } = useSelector((state) => state.tasks);
  useEffect(() => {
    dispatch(getTasks(slug));
    console.log("TASKS", tasks);
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      {success && (
        <FlatList
          data={tasks.tasks}
          renderItem={({ item }) => <Task task={item} />}
          keyExtractor={(item) => item._id}
        />
      )}

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
