import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Tasks from "../tasks/Tasks";

const ProjectDetails = ({ navigation }) => {
  useEffect(() => {
    console.log(navigation);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProjectDetails</Text>
      <TouchableOpacity onPress={() => navigation.navigate("EditProject")}>
        <View>
          <Text>Edit Project</Text>
        </View>
      </TouchableOpacity>
      <Tasks />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: { textAlign: "center", fontSize: 24 },
});

export default ProjectDetails;
