import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import NotificationHeader from "../components/NotificationHeader";
import NotificationItem from "../components/NotificationItem";
import NotificationFilterBar from "../components/NotificationFilterBar";
import { Notification } from "../types";

const notifications: Notification[] = [
  {
    id: "1",
    type: "issue",
    title: "Fix navigation bug in home screen",
    repo: "username/my-project",
    time: "10m ago",
    isUnread: true,
    reason: "You were assigned",
  },
  {
    id: "2",
    type: "pr",
    title: "Add dark mode support",
    repo: "organization/team-project",
    time: "2h ago",
    isUnread: true,
    reason: "Review requested",
  },
  {
    id: "3",
    type: "discussion",
    title: "Discuss the architecture for new feature",
    repo: "username/another-repo",
    time: "5h ago",
    isUnread: false,
    reason: "You were mentioned",
  },
  {
    id: "4",
    type: "release",
    title: "v1.2.0 has been released",
    repo: "popular/library",
    time: "1d ago",
    isUnread: false,
    reason: "Release",
  },
  {
    id: "5",
    type: "issue",
    title: "Update documentation for API changes",
    repo: "org/documentation",
    time: "2d ago",
    isUnread: false,
    reason: "Subscribed",
  },
  {
    id: "6",
    type: "pr",
    title: "Refactor authentication flow",
    repo: "username/my-project",
    time: "3d ago",
    isUnread: false,
    reason: "Your PR",
  },
];

export default function GitHubNotificationsScreen(): React.ReactElement {
  const [filter, setFilter] = useState<string>("all");
  const [filterType, setFilterType] = useState<"unread" | "all">("unread");

  const filteredNotifications = notifications.filter((notification) => {
    if (filterType === "unread" && !notification.isUnread) {
      return false;
    }

    if (filter !== "all" && notification.type !== filter) {
      return false;
    }

    return true;
  });

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      <NotificationHeader />

      <NotificationFilterBar
        filter={filter}
        setFilter={setFilter}
        filterType={filterType}
        setFilterType={setFilterType}
      />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {filteredNotifications.length > 0 ? (
          <View className="space-y-1 px-4 py-2">
            {filteredNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </View>
        ) : (
          <View className="flex-1 items-center justify-center py-12">
            <Octicons name="inbox" size={48} color="#8b949e" />
            <Text className="mt-4 text-gray-500 dark:text-gray-400 text-center">
              No {filterType === "unread" ? "unread " : ""}
              {filter !== "all" ? filter + " " : ""}
              notifications
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
