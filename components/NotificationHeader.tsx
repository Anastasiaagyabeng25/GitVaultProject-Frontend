import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Octicons } from "@expo/vector-icons";

const NotificationHeader: React.FC = () => {
  return (
    <View className="bg-white dark:bg-gray-800 pt-10 pb-2 px-4 border-b border-gray-200 dark:border-gray-700">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row justify-between items-center">
        <Text className="text-xl font-bold dark:text-white">Notifications</Text>

        <View className="flex-row items-center">
          <TouchableOpacity className="p-2 mr-2">
            <Octicons name="check-all" size={20} color="#24292e" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2">
            <Octicons name="gear" size={20} color="#24292e" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NotificationHeader;
