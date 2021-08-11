import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Project = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
});

export default Project;
