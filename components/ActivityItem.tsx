import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Activity } from "../types/types.js";

interface ActivityItemProps {
  activity: Activity;
}

export default function ActivityItem({ activity }: ActivityItemProps) {
  const { type, repo, time, description } = activity;

  const getActivityIcon = () => {
    switch (type) {
      case "push":
        return { name: "git-commit", color: "#0366d6" };
      case "issue":
        return { name: "issue-opened", color: "#28a745" };
      case "pr":
        return { name: "git-pull-request", color: "#6f42c1" };
      case "release":
        return { name: "tag", color: "#e36209" };
      case "fork":
        return { name: "repo-forked", color: "#6a737d" };
      case "star":
        return { name: "star", color: "#f1e05a" };
      default:
        return { name: "dot-fill", color: "#0366d6" };
    }
  };

  const icon = getActivityIcon();

  return (
    <TouchableOpacity className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
      <View className="flex-row items-start">
        <View className="mr-3 pt-1">
          <Octicons name={icon.name} size={16} color={icon.color} />
        </View>

        <View className="flex-1">
          <Text
            className="text-gray-900 dark:text-gray-200 font-medium"
            numberOfLines={2}
          >
            {description}
          </Text>

          <View className="flex-row items-center mt-1">
            <Text className="text-xs text-blue-600 dark:text-blue-400 mr-2">
              {repo}
            </Text>
            <Text className="text-xs text-gray-500 dark:text-gray-400">
              {time}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
