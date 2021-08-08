import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Project from "./Project";

const Projects = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project List</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ProjectDetails")}>
        <Project />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("AddProject")}>
        <View>
          <Text>Add Project</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: { textAlign: "center", fontSize: 24 },
});

export default Projects;
