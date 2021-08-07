import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddProject = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AddProject</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: { textAlign: "center", fontSize: 24 },
});

export default AddProject;
