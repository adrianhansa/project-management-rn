import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UserProfile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: { textAlign: "center", fontSize: 24 },
});

export default UserProfile;
