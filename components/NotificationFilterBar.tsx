import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Octicons } from "@expo/vector-icons";

interface NotificationFilterBarProps {
  filter: string;
  setFilter: (filter: string) => void;
  filterType: "unread" | "all";
  setFilterType: (filterType: "unread" | "all") => void;
}

const NotificationFilterBar: React.FC<NotificationFilterBarProps> = ({
  filter,
  setFilter,
  filterType,
  setFilterType,
}) => {
  const filters = [
    { id: "all", label: "All" },
    { id: "issue", label: "Issues" },
    { id: "pr", label: "Pull Requests" },
    { id: "discussion", label: "Discussions" },
    { id: "release", label: "Releases" },
  ];

  return (
    <View className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      {/* Filter Type Toggle */}
      <View className="flex-row border-b border-gray-200 dark:border-gray-700">
        <TouchableOpacity
          onPress={() => setFilterType("unread")}
          className={`flex-1 py-3 items-center ${
            filterType === "unread" ? "border-b-2 border-blue-500" : ""
          }`}
        >
          <Text
            className={`${
              filterType === "unread"
                ? "text-blue-500 font-medium"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            Unread
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilterType("all")}
          className={`flex-1 py-3 items-center ${
            filterType === "all" ? "border-b-2 border-blue-500" : ""
          }`}
        >
          <Text
            className={`${
              filterType === "all"
                ? "text-blue-500 font-medium"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            All
          </Text>
        </TouchableOpacity>
      </View>

      {/* Notification Type Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="py-2 px-2"
      >
        {filters.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setFilter(item.id)}
            className={`px-3 py-1 rounded-full mr-2 ${
              filter === item.id
                ? "bg-blue-100 dark:bg-blue-900"
                : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            <Text
              className={`${
                filter === item.id
                  ? "text-blue-600 dark:text-blue-300"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationFilterBar;
