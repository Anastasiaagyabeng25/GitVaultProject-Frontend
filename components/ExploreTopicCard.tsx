import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Topic } from "../types/types.js";

interface ExploreTopicCardProps {
  topic: Topic;
}

const ExploreTopicCard: React.FC<ExploreTopicCardProps> = ({ topic }) => {
  const { name, description, totalRepos } = topic;

  return (
    <TouchableOpacity className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
      <View className="flex-row items-center mb-2">
        <View className="bg-blue-100 dark:bg-blue-900 p-1 rounded-md mr-2">
          <Octicons name="hash" size={16} color="#0366d6" />
        </View>
        <Text className="font-medium text-blue-600 dark:text-blue-400">
          {name}
        </Text>
      </View>

      {description && (
        <Text
          className="text-gray-600 dark:text-gray-400 text-sm mb-2"
          numberOfLines={2}
        >
          {description}
        </Text>
      )}

      <View className="flex-row items-center">
        <Octicons name="repo" size={14} color="#6a737d" />
        <Text className="text-xs text-gray-600 dark:text-gray-400 ml-1">
          {totalRepos} repositories
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExploreTopicCard;
