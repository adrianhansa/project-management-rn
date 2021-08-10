import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Project from "./Project";
import { useSelector } from "react-redux";
// import {} from '../../redux/actions/projectActions'

const Projects = ({ navigation }) => {
  const { user } = useSelector((state) => state.userLoggedIn);
  useEffect(() => {
    if (!user) {
      navigation.navigate("Login");
    } else {
    }
  }, [user]);
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
