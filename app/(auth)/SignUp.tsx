import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (email && username && password) {
      router.replace("../(tabs)");
    }
  };

  return (
    <View className="flex-1 bg-gray-900 px-6 justify-center">
      <View className="items-center mb-8">
        <Ionicons name="logo-github" size={80} color="white" />
        <Text className="text-white text-2xl font-bold mt-4">Join GitHub</Text>
      </View>

      <View className="space-y-4">
        <View>
          <Text className="text-white text-sm mb-2">Username</Text>
          <TextInput
            className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700"
            value={username}
            onChangeText={setUsername}
            placeholder="Pick a username"
            placeholderTextColor="#6b7280"
          />
        </View>

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
            placeholder="Create a password"
            placeholderTextColor="#6b7280"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          className="bg-green-600 py-4 rounded-lg mt-6"
          onPress={handleSignUp}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Create account
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-gray-400">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/SignIn")}>
            <Text className="text-blue-400">Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
