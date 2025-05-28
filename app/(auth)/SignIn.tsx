import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Simple validation
    if (email && password) {
      router.replace("../(tabs)/HomeScreen");
    }
  };

  return (
    <View className="flex-1 bg-gray-900 px-6 justify-center">
      <View className="items-center mb-8">
        <Ionicons name="logo-github" size={80} color="white" />
        <Text className="text-white text-2xl font-bold mt-4">
          Sign in to GitHub
        </Text>
      </View>

      <View className="space-y-4">
        <View>
          <Text className="text-white text-sm mb-2">Email</Text>
          <TextInput
            className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#6b7280"
            keyboardType="email-address"
          />
        </View>

        <View>
          <Text className="text-white text-sm mb-2">Password</Text>
          <TextInput
            className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            placeholderTextColor="#6b7280"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          className="bg-green-600 py-4 rounded-lg mt-6"
          onPress={handleSignIn}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Sign in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(auth)/Forgot")}>
          <Text className="text-blue-400 text-center mt-4">
            Forgot password?
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-gray-400">New to GitHub? </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/SignUp")}>
            <Text className="text-blue-400">Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
