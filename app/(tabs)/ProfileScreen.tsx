import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const ProfileScreen = () => {
  const handleSignOut = () => {
    router.replace("/(auth)/SignIn");
  };
  return (
    <View className="flex-1 bg-gray-900">
      <View className="flex-row justify-between items-center p-4 pt-12">
        <Text className="text-white text-xl font-bold">Profile</Text>
        <TouchableOpacity onPress={handleSignOut}>
          <Ionicons name="log-out-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        <View className="items-center py-6">
          <View className="w-20 h-20 bg-gray-700 rounded-full items-center justify-center mb-4">
            <Ionicons name="person" size={40} color="white" />
          </View>
          <Text className="text-white text-xl font-bold">John Doe</Text>
          <Text className="text-gray-400">@johndoe</Text>
          <Text className="text-gray-400 text-center px-6 mt-2">
            Software developer passionate about open source
          </Text>
        </View>

        <View className="px-4 space-y-3">
          <TouchableOpacity className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <View className="flex-row items-center">
              <Ionicons name="folder" size={20} color="#22c55e" />
              <Text className="text-white ml-3 flex-1">Repositories</Text>
              <Text className="text-gray-400">12</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <View className="flex-row items-center">
              <Ionicons name="star" size={20} color="#fbbf24" />
              <Text className="text-white ml-3 flex-1">Starred</Text>
              <Text className="text-gray-400">89</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <View className="flex-row items-center">
              <Ionicons name="people" size={20} color="#3b82f6" />
              <Text className="text-white ml-3 flex-1">Following</Text>
              <Text className="text-gray-400">45</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <View className="flex-row items-center">
              <Ionicons name="heart" size={20} color="#ef4444" />
              <Text className="text-white ml-3 flex-1">Sponsors</Text>
              <Text className="text-gray-400">3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
