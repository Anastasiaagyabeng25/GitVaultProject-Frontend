import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Octicons } from "@expo/vector-icons";
import Header from "../../components/Header";
import RepositoryCard from "../../components/RepositoryCard";
import ActivityItem from "../../components/ActivityItem";
import { Repository, Activity } from "../../types/types";

const repositories: Repository[] = [
  {
    id: "1",
    name: "username/my-project",
    description: "A really cool project I'm working on",
    language: "JavaScript",
    stars: 12,
    forks: 3,
    isPrivate: false,
  },
  {
    id: "2",
    name: "username/another-repo",
    description: "Another repository with some code",
    language: "TypeScript",
    stars: 5,
    forks: 1,
    isPrivate: false,
  },
  {
    id: "3",
    name: "org/private-project",
    description: "A private organization project",
    language: "Python",
    stars: 0,
    forks: 0,
    isPrivate: true,
  },
];

const activities: Activity[] = [
  {
    id: "1",
    type: "push",
    repo: "username/my-project",
    time: "2h ago",
    description: "You pushed 3 commits to main",
  },
  {
    id: "2",
    type: "issue",
    repo: "org/project",
    time: "5h ago",
    description: "You opened issue #42: Fix navigation error",
  },
  {
    id: "3",
    type: "pr",
    repo: "username/another-repo",
    time: "1d ago",
    description: "Your PR #15 was merged",
  },
];

export default function GitHubHomeScreen() {
  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      <Header />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* My Work Section */}
        <View className="px-4 pt-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-lg font-bold dark:text-white">My Work</Text>
            <TouchableOpacity className="p-1">
              <Octicons name="plus" size={20} color="#0366d6" />
            </TouchableOpacity>
          </View>

          {/* Quick Access Buttons */}
          <View className="flex-row mb-4">
            <TouchableOpacity className="flex-1 flex-row items-center bg-white dark:bg-gray-800 p-2 rounded-md mr-2">
              <Octicons name="issue-opened" size={18} color="#28a745" />
              <Text className="ml-2 dark:text-white">Issues</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 flex-row items-center bg-white dark:bg-gray-800 p-2 rounded-md mr-2">
              <Octicons name="git-pull-request" size={18} color="#6f42c1" />
              <Text className="ml-2 dark:text-white">Pull Requests</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 flex-row items-center bg-white dark:bg-gray-800 p-2 rounded-md">
              <Octicons name="repo" size={18} color="#0366d6" />
              <Text className="ml-2 dark:text-white">Repos</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Repositories Section */}
        <View className="px-4 py-2">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-lg font-bold dark:text-white">
              Repositories
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-500">See all</Text>
            </TouchableOpacity>
          </View>

          <View className="space-y-2">
            {repositories.map((repo) => (
              <RepositoryCard key={repo.id} repository={repo} />
            ))}
          </View>
        </View>

        {/* Recent Activity Section */}
        <View className="px-4 py-2 mb-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-lg font-bold dark:text-white">
              Recent Activity
            </Text>
          </View>

          <View className="space-y-2">
            {activities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
