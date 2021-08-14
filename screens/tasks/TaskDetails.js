import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/actions/taskActions";
import { getProject } from "../../redux/actions/projectActions";
import { AntDesign } from "@expo/vector-icons";

const TaskDetails = ({ route, navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(route.params.id);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Details</Text>
      <AntDesign
        name="delete"
        size={24}
        color="black"
        style={styles.delete}
        onPress={() => {
          dispatch(deleteTask(route.params.id, route.params.slug));
          dispatch(getProject(route.params.slug));
          navigation.navigate("ProjectDetails", { slug: route.params.slug });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: { textAlign: "center", fontSize: 24 },
});

export default TaskDetails;
