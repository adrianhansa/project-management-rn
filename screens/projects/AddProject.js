import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { createProject, getProjects } from "../../redux/actions/projectActions";

const schemaValidation = yup.object({
  name: yup.string().required(),
});

const AddProject = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: "" }}
        validationSchema={schemaValidation}
        onSubmit={(values) => {
          dispatch(createProject(values));
          dispatch(getProjects());
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
              <Button title="Add Project" onPress={props.handleSubmit} />
            </>
          );
        }}
      </Formik>
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

export default AddProject;
