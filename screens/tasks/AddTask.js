import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddTask = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AddTask</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: { textAlign: "center", fontSize: 24 },
});

export default AddTask;
