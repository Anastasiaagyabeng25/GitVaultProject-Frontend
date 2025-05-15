import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Notification } from "../types/types.js";

interface NotificationItemProps {
  notification: Notification;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
}) => {
  const { type, title, repo, time, isUnread, reason } = notification;

  const getNotificationIcon = () => {
    switch (type) {
      case "issue":
        return {
          name: "issue-opened",
          color: "#28a745",
          bgColor: "bg-green-100",
        };
      case "pr":
        return {
          name: "git-pull-request",
          color: "#6f42c1",
          bgColor: "bg-purple-100",
        };
      case "discussion":
        return {
          name: "comment-discussion",
          color: "#0366d6",
          bgColor: "bg-blue-100",
        };
      case "release":
        return { name: "tag", color: "#e36209", bgColor: "bg-orange-100" };
      default:
        return { name: "bell", color: "#6a737d", bgColor: "bg-gray-100" };
    }
  };

  const icon = getNotificationIcon();

  return (
    <TouchableOpacity
      className={`flex-row p-3 rounded-lg ${
        isUnread
          ? "bg-blue-50 dark:bg-blue-900/20"
          : "bg-white dark:bg-gray-800"
      }`}
    >
      <View
        className={`${icon.bgColor} dark:bg-opacity-20 rounded-full p-2 mr-3`}
      >
        <Octicons name={icon.name} size={16} color={icon.color} />
      </View>

      <View className="flex-1">
        <Text
          className={`text-sm ${
            isUnread
              ? "font-semibold text-gray-900 dark:text-white"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {title}
        </Text>

        <View className="flex-row items-center mt-1">
          <Text className="text-xs text-blue-600 dark:text-blue-400 mr-2">
            {repo}
          </Text>
          <Text className="text-xs text-gray-500 dark:text-gray-400">
            {time}
          </Text>
        </View>

        <View className="flex-row items-center mt-1">
          <Text className="text-xs text-gray-500 dark:text-gray-400">
            {reason}
          </Text>
        </View>
      </View>

      {isUnread && (
        <View className="ml-2">
          <View className="w-2 h-2 rounded-full bg-blue-500" />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default NotificationItem;
