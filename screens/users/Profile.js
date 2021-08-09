import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/userActions";

const UserProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const profileLoaded = useSelector((state) => {
    state.profile;
  });
  // const { loading, error, user } = profileLoaded;
  useEffect(() => {
    dispatch(getProfile());
    console.log("Profile", profileLoaded);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Adi!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: { textAlign: "center", fontSize: 24 },
});

export default UserProfile;
