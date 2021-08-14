import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Project from "./Project";
import { useSelector, useDispatch } from "react-redux";
import { getProjects, deleteProject } from "../../redux/actions/projectActions";
import { MaterialIcons } from "@expo/vector-icons";

const Projects = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLoggedIn);
  const { loading, projects, error } = useSelector(
    (state) => state.getProjects
  );
  useEffect(() => {
    if (!user) {
      navigation.navigate("Login");
    }
  }, [user]);
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project List</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : projects ? (
        <FlatList
          data={projects}
          renderItem={({ item }) => (
            <View style={styles.projectWrapper}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProjectDetails", { slug: item.slug })
                }
              >
                <Project item={item} />
              </TouchableOpacity>
              <MaterialIcons
                name="delete-outline"
                size={24}
                color="red"
                onPress={() => dispatch(deleteProject(item.slug))}
              />
            </View>
          )}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <Text>{error}</Text>
      )}

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
  projectWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  title: { textAlign: "center", fontSize: 24 },
});

export default Projects;
