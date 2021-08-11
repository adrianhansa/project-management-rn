import React, { useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProject, getProject } from "../../redux/actions/projectActions";

const schemaValidation = yup.object({
  name: yup.string().required(),
});

const EditProject = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { loading, error, project } = useSelector((state) => state.getProject);
  useEffect(() => {
    dispatch(getProject(route.params.slug));
  }, [dispatch]);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : project ? (
        <Formik
          initialValues={{ name: project.name }}
          validationSchema={schemaValidation}
          onSubmit={(values) => {
            dispatch(updateProject(values, route.params.slug));
            navigation.navigate("Projects");
          }}
        >
          {(props) => {
            return (
              <>
                <TextInput
                  style={styles.inputText}
                  placeholder="Project name"
                  onChangeText={props.handleChange("name")}
                  onBlur={props.handleBlur("name")}
                  value={props.values.name}
                />
                <Text style={styles.error}>
                  {props.touched.name && props.errors.name}
                </Text>
                <Button title="Update Project" onPress={props.handleSubmit} />
              </>
            );
          }}
        </Formik>
      ) : (
        <Text>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingVertical: 10 },
  title: { textAlign: "center", fontSize: 24 },
  inputText: {
    width: 300,
    backgroundColor: "#b6bfc4",
    borderRadius: 25,
    padding: 16,
    fontSize: 16,
    marginVertical: 2,
  },
  error: { color: "red" },
});

export default EditProject;
