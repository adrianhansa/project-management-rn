import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Project from "./Project";
import { useSelector } from "react-redux";
import { getProjects } from "../../redux/actions/projectActions";

const Projects = ({ navigation }) => {
  const { user } = useSelector((state) => state.userLoggedIn);
  const { loading, projects, error } = useSelector(
    (state) => state.getProjects
  );
  const projectList = useSelector((state) => state.getProjects);
  useEffect(() => {
    if (!user) {
      navigation.navigate("Login");
    }
  }, [user]);
  useEffect(() => {
    console.log(projectList);
  }, [projectList]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project List</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : projects ? (
        <FlatList
          data={projects}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <Text>{error}</Text>
      )}
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
