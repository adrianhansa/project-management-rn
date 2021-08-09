import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button onPress={() => navigation.navigate("Profile")} title="Profile" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: { textAlign: "center", fontSize: 24 },
});

export default Home;
