import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProjectDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProjectDetails</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: { textAlign: "center", fontSize: 24 },
});

export default ProjectDetails;
