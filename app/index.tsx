import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Redirect } from "expo-router";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasUser, setHasUser] = useState(false);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);

  useEffect(() => {
    // Simulate auth check and onboarding check
    const checkAppState = async () => {
      try {
        // Replace with actual auth check
        const userExists = false;

        // Replace with actual onboarding check (AsyncStorage, etc.)
        // For now, we'll assume they haven't seen onboarding
        const onboardingSeen = false;

        setHasUser(userExists);
        setHasSeenOnboarding(onboardingSeen);
        setIsLoading(false);
      } catch (error) {
        console.error("Error checking app state:", error);
        setIsLoading(false);
      }
    };

    checkAppState();
  }, []);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-900">
        <Text className="text-white text-xl">Loading...</Text>
      </View>
    );
  }

  // If user is authenticated, go to main app
  if (hasUser) {
    return <Redirect href="/(tabs)/HomeScreen" />;
  }

  // If user hasn't seen onboarding, show onboarding
  if (!hasSeenOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  // Otherwise, show sign in
  return <Redirect href="/(auth)/SignIn" />;
}
