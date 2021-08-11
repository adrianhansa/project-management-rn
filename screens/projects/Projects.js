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
import { getProjects } from "../../redux/actions/projectActions";

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
    console.log(projects);
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
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProjectDetails", {
                  id: item._id,
                  slug: item.slug,
                })
              }
            >
              <Project item={item} />
            </TouchableOpacity>
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
  title: { textAlign: "center", fontSize: 24 },
});

export default Projects;
