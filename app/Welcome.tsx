import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Welcome() {
  const features = [
    {
      icon: "git-branch" as keyof typeof Ionicons.glyphMap,
      title: "Version Control",
      description: "Track every change to your code",
    },
    {
      icon: "people" as keyof typeof Ionicons.glyphMap,
      title: "Collaboration",
      description: "Work together with your team",
    },
    {
      icon: "shield-checkmark" as keyof typeof Ionicons.glyphMap,
      title: "Security",
      description: "Keep your code safe and secure",
    },
  ];

  const handleGetStarted = () => {
    router.push("/onboarding");
  };

  const handleSignIn = () => {
    router.push("/(auth)/SignIn");
  };

  return (
    <ScrollView className="flex-1 bg-gray-900">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="items-center pt-16 pb-12">
          <Ionicons name="logo-github" size={100} color="white" />
          <Text className="text-white text-4xl font-bold mt-6">GitHub</Text>
          <Text className="text-gray-400 text-lg mt-2 text-center">
            Where the world builds software
          </Text>
        </View>

        {/* Hero Section */}
        <View className="mb-12">
          <Text className="text-white text-2xl font-bold text-center mb-4">
            Build what's next
          </Text>
          <Text className="text-gray-400 text-base text-center leading-6">
            Join millions of developers who use GitHub to build, ship, and
            maintain their software.
          </Text>
        </View>

        {/* Features */}
        <View className="mb-12">
          {features.map((feature, index) => (
            <View key={index} className="flex-row items-start mb-6">
              <View className="w-12 h-12 bg-gray-800 rounded-full items-center justify-center mr-4">
                <Ionicons name={feature.icon} size={24} color="#22c55e" />
              </View>
              <View className="flex-1">
                <Text className="text-white text-lg font-semibold mb-1">
                  {feature.title}
                </Text>
                <Text className="text-gray-400 text-sm">
                  {feature.description}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Stats */}
        <View className="bg-gray-800 rounded-lg p-6 mb-12">
          <Text className="text-white text-lg font-semibold mb-4 text-center">
            Trusted by developers worldwide
          </Text>
          <View className="flex-row justify-around">
            <View className="items-center">
              <Text className="text-green-400 text-2xl font-bold">100M+</Text>
              <Text className="text-gray-400 text-sm">Developers</Text>
            </View>
            <View className="items-center">
              <Text className="text-blue-400 text-2xl font-bold">330M+</Text>
              <Text className="text-gray-400 text-sm">Repositories</Text>
            </View>
            <View className="items-center">
              <Text className="text-purple-400 text-2xl font-bold">4M+</Text>
              <Text className="text-gray-400 text-sm">Organizations</Text>
            </View>
          </View>
        </View>

        {/* CTA Buttons */}
        <View className="pb-8">
          <TouchableOpacity
            className="bg-green-600 py-4 rounded-lg mb-4"
            onPress={handleGetStarted}
          >
            <Text className="text-white text-center font-semibold text-lg">
              Get Started for Free
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="border border-gray-600 py-4 rounded-lg"
            onPress={handleSignIn}
          >
            <Text className="text-white text-center font-semibold text-lg">
              Sign In
            </Text>
          </TouchableOpacity>

          <Text className="text-gray-500 text-xs text-center mt-4">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
