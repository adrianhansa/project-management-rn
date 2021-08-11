import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/userActions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const profileLoaded = useSelector((state) => state.profile);
  const { success, profile } = profileLoaded;
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      {success ? (
        <Text style={styles.title}>Welcome, {profile.name}!</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: { textAlign: "center", fontSize: 24 },
});

export default UserProfile;
