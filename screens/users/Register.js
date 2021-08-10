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
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/userActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const userRegistered = useSelector((state) => state.userRegistered);
  const validationSchema = yup.object({
    email: yup.string().required().email(),
    name: yup.string().required().min(2).max(55),
    password: yup.string().required().min(6),
    passwordVerify: yup.string().required().min(6),
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordVerify: "",
          name: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          dispatch(register(values));
          if (userRegistered.success) {
            await AsyncStorage.setItem("token", userRegistered.user.token);
            navigation.navigate("Profile");
          }
        }}
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
      <View>
        <Text>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View>
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
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

export default Register;
