import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Tasks from "../tasks/Tasks";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../../redux/actions/projectActions";

const ProjectDetails = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const projectDetails = useSelector((state) => {
    return state.getProject;
  });
  useEffect(() => {
    console.log(projectDetails);
    dispatch(getProject(route.params.slug));
  }, [dispatch]);
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {},
  title: { textAlign: "center", fontSize: 24 },
});

export default ProjectDetails;
