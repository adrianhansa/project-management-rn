import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const Register = ({ navigation }) => {
  const validationSchema = yup.object({
    email: yup.string().required().email(),
    name: yup.string().required().min(2).max(55),
    password: yup.string().required().min(6),
    passwordVerify: yup.string().required().min(6),
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View>
        <Text>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View>
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordVerify: "",
          name: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log("Registered", values)}
      >
        {(props) => (
          <View style={styles.formWrapper}>
            <View style={styles.inputTextWrapper}>
              <TextInput
                style={styles.inputText}
                placeholder="Name"
                value={props.values.name}
                onChangeText={props.handleChange("name")}
                onBlur={props.handleBlur("name")}
              />
              <Text style={styles.error}>
                {props.touched.name && props.errors.name}
              </Text>
            </View>
            <View style={styles.inputTextWrapper}>
              <TextInput
                style={styles.inputText}
                placeholder="email"
                value={props.values.email}
                onChangeText={props.handleChange("email")}
                onBlur={props.handleBlur("email")}
              />
              <Text style={styles.error}>
                {props.touched.email && props.errors.email}
              </Text>
            </View>
            <View style={styles.inputTextWrapper}>
              <TextInput
                style={styles.inputText}
                placeholder="password"
                value={props.values.password}
                secureTextEntry={true}
                onChangeText={props.handleChange("password")}
                onBlur={props.handleBlur("password")}
              />
              <Text style={styles.error}>
                {props.touched.password && props.errors.password}
              </Text>
            </View>
            <View style={styles.inputTextWrapper}>
              <TextInput
                style={styles.inputText}
                placeholder="password verify"
                value={props.values.passwordVerify}
                onChangeText={props.handleChange("passwordVerify")}
                secureTextEntry={true}
                onBlur={props.handleBlur("passwordVerify")}
              />
              <Text style={styles.error}>
                {props.touched.passwordVerify && props.errors.passwordVerify}
              </Text>
            </View>
            <TouchableOpacity onPress={props.handleSubmit}>
              <View style={styles.buttonWrapper}>
                <Text style={styles.button}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  title: { textAlign: "center", fontSize: 24, marginVertical: 14 },
  inputTextWrapper: {},
  inputText: {},
  error: {},
  formWrapper: {},
  buttonWrapper: {},
  button: {},
});

export default Register;
