import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Login from "./users/Login";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Login navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { textAlign: "center", fontSize: 24 },
});

export default Welcome;
