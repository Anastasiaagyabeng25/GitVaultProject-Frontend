import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Octicons } from "@expo/vector-icons";

const Header: React.FC = () => {
  return (
    <View className="bg-white dark:bg-gray-800 pt-10 pb-2 px-4 border-b border-gray-200 dark:border-gray-700">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Octicons name="mark-github" size={24} color="#24292e" />
          <Text className="text-xl font-bold ml-2 dark:text-white">GitHub</Text>
        </View>

        <View className="flex-row items-center">
          <TouchableOpacity className="p-2 mr-2">
            <Octicons name="search" size={20} color="#24292e" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2">
            <Octicons name="bell" size={20} color="#24292e" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
