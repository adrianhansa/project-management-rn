import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../redux/actions/taskActions";

const AddTask = ({ navigation }) => {
  const dispatch = useDispatch();
  const { project } = useSelector((state) => state.getProject);
  const schemaValidation = yup.object({
    description: yup.string().required(),
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AddTask</Text>
      <Formik
        initialValues={{ description: "" }}
        schemaValidation={schemaValidation}
        onSubmit={(values) => {
          dispatch(createTask(values, project.project.slug));
          navigation.navigate("ProjectDetails");
        }}
      >
        {(props) => {
          return (
            <>
              <Text>FORM</Text>
              <TextInput
                placeholder="Task description"
                value={props.values.description}
                onChangeText={props.handleChange("description")}
                onBlur={props.handleBlur("description")}
                style={styles.inputText}
              />
              <Text style={styles.error}>
                {props.touched.description && props.errors.description}
              </Text>
              <Button title="Hello" onPress={props.handleSubmit} />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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

export default AddTask;
