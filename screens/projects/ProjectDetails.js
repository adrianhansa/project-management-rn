import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Tasks from "../tasks/Tasks";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../../redux/actions/projectActions";

const ProjectDetails = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { loading, project } = useSelector((state) => state.getProject);
  useEffect(() => {
    dispatch(getProject(route.params.slug));
  }, [dispatch]);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading</Text>
      ) : project ? (
        <>
          <Text style={styles.title}>{project.project.name}</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EditProject", { slug: project.project.slug })
            }
          >
            <View>
              <Text>Edit Project</Text>
            </View>
          </TouchableOpacity>
          <Tasks
            navigation={navigation}
            slug={project.project.slug}
            tasks={project.tasks}
          />
        </>
      ) : (
        <Text>Error</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: { textAlign: "center", fontSize: 24 },
});

export default ProjectDetails;
