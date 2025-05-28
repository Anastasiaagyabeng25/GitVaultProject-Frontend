import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Redirect } from "expo-router";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasUser, setHasUser] = useState(false);

  useEffect(() => {
    // Simulate auth check
    const checkAuth = async () => {
      // Replace with actual auth check
      const userExists = false;
      setHasUser(userExists);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-900">
        <Text className="text-white text-xl">Loading...</Text>
      </View>
    );
  }

  if (hasUser) {
    return <Redirect href="/(tabs)/HomeScreen" />;
  }

  return <Redirect href="/(auth)/SignIn" />;
}
