import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const auth = useSelector((state) => state.userLoggedIn);
  useEffect(() => {
    if (auth.success) {
      console.log(auth.user);
    }
  }, [auth]);
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
