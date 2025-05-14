import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../../context/auth";

const Profile = () => {
  const { signOut } = useAuth(); // Call useAuth() inside the component
  const router = useRouter();

  const onLogOut = async () => {
    try {
      // Remove user data from AsyncStorage
      await AsyncStorage.removeItem("user");

      // Sign out the user
      signOut();

      // Redirect to login page after logout
      router.replace("/(auth)/login"); // Adjust path if necessary
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Pressable onPress={onLogOut} style={styles.button}>
        <Text style={{ color: "white" }}>Log Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: "60%",
    backgroundColor: "#05BFDB",
    marginTop: 8,
    borderRadius: 32,
    alignItems: "center",
  },
});

export default Profile;
