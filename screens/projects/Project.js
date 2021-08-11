import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Project = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Project;
