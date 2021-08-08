import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const AddProject = ({ navigation }) => {
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
