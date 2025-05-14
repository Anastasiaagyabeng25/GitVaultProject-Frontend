import { Stack } from "expo-router";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, UserCredentials } from "../context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useProtectedRoute } from "../context/auth";

export default function AuthLayout() {
  const [isReady, setIsReady] = useState(false);
  const [loadedUser, setLoadedUser] = useState<UserCredentials | null>(null);
  const [loadingError, setLoadingError] = useState<string | null>(null);

  const getUserFromStorage = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        setLoadedUser(JSON.parse(user));
      }
    } catch (error) {
      setLoadingError("Failed to load user data.");
    } finally {
      setIsReady(true);
    }
  };

  useEffect(() => {
    getUserFromStorage();
  }, []);

  if (!isReady) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.loading}>
          <Text>Loading...</Text>
        </View>
      </GestureHandlerRootView>
    );
  }

  if (loadingError) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.loading}>
          <Text>{loadingError}</Text>
        </View>
      </GestureHandlerRootView>
    );
  }

  // Pass loadedUser to the Provider
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider userCredentials={loadedUser}>
        <Stack screenOptions={{ headerShown: false }} />
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
