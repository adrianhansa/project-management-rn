import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const schemaValidation = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <ScrollView>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={schemaValidation}
          >
            {(props) => (
              <View style={styles.formWrapper}>
                <View style={styles.inputTextWrapper}>
                  <TextInput
                    placeholder="Email"
                    value={props.values.email}
                    onChangeText={props.handleChange("email")}
                    onBlur={props.handleBlur("email")}
                    style={styles.inputText}
                  />
                  <Text style={styles.error}>
                    {props.touched.email && props.errors.email}
                  </Text>
                </View>

                <View style={styles.inputTextWrapper}>
                  <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    value={props.values.password}
                    onChangeText={props.handleChange("password")}
                    onBlur={props.handleBlur("password")}
                    secureTextEntry={true}
                  />
                  <Text style={styles.error}>
                    {props.touched.password && props.errors.password}
                  </Text>
                </View>
                <TouchableOpacity onPress={props.handleSubmit}>
                  <View style={styles.buttonWrapper}>
                    <Text style={styles.button}>Login</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </ScrollView>
        <View>
          <Text>Don't have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <View>
              <Text>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: { textAlign: "center", fontSize: 24, marginVertical: 14 },
  inputTextWrapper: {},
  inputText: {
    width: 300,
    backgroundColor: "#b6bfc4",
    borderRadius: 25,
    padding: 16,
    fontSize: 16,
    marginVertical: 2,
  },
  error: { color: "red" },
  formWrapper: {},
  buttonWrapper: {
    width: 300,
    backgroundColor: "#738289",
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 25,
  },
  button: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
});

export default Login;
