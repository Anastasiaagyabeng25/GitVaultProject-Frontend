import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import ExploreHeader from "../components/ExploreHeader";
import RepositoryCard from "../components/RepositoryCard";
import ExploreTrendingSection from "../components/ExploreTrendingSection";
import ExploreTopicCard from "../components/ExploreTopicCard";
import { Repository, Topic } from "../types";

const trendingRepositories: Repository[] = [
  {
    id: "1",
    name: "facebook/react",
    description:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    language: "JavaScript",
    stars: 189000,
    forks: 38500,
    isPrivate: false,
    trending: "+ 120 stars today",
  },
  {
    id: "2",
    name: "microsoft/vscode",
    description: "Visual Studio Code",
    language: "TypeScript",
    stars: 137000,
    forks: 23400,
    isPrivate: false,
    trending: "+ 98 stars today",
  },
  {
    id: "3",
    name: "flutter/flutter",
    description:
      "Flutter makes it easy and fast to build beautiful apps for mobile and beyond",
    language: "Dart",
    stars: 142000,
    forks: 22800,
    isPrivate: false,
    trending: "+ 95 stars today",
  },
];

const topics: Topic[] = [
  {
    id: "1",
    name: "react",
    description: "React is a JavaScript library for building user interfaces.",
    totalRepos: "148K",
  },
  {
    id: "2",
    name: "machine-learning",
    description: "Machine learning is a method of data analysis.",
    totalRepos: "57K",
  },
  {
    id: "3",
    name: "web-development",
    description: "Development of websites and web applications.",
    totalRepos: "124K",
  },
  {
    id: "4",
    name: "android",
    description:
      "Android is an open source operating system for mobile devices.",
    totalRepos: "112K",
  },
];

export default function ExploreScreen(): React.ReactElement {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      <ExploreHeader />

      {/* Search Bar */}
      <View className="px-4 pt-3 pb-2">
        <View className="flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
          <Octicons name="search" size={16} color="#6e7781" />
          <TextInput
            className="flex-1 ml-2 text-gray-900 dark:text-white"
            placeholder="Search GitHub"
            placeholderTextColor="#6e7781"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Trending Repositories Section */}
        <ExploreTrendingSection repositories={trendingRepositories} />

        {/* Explore Topics Section */}
        <View className="px-4 py-3">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-lg font-bold dark:text-white">
              Explore Topics
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-500">See all</Text>
            </TouchableOpacity>
          </View>

          <View className="grid grid-cols-2 gap-3">
            {topics.map((topic) => (
              <ExploreTopicCard key={topic.id} topic={topic} />
            ))}
          </View>
        </View>

        {/* Activity Suggestions Section */}
        <View className="px-4 py-3 mb-4">
          <Text className="text-lg font-bold mb-2 dark:text-white">
            Activity Suggestions
          </Text>

          <View className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <TouchableOpacity className="p-4 border-b border-gray-200 dark:border-gray-700 flex-row items-center">
              <Octicons
                name="star"
                size={20}
                color="#e3b341"
                className="mr-3"
              />
              <View className="flex-1">
                <Text className="font-medium dark:text-white">
                  Stars you might like
                </Text>
                <Text className="text-gray-600 dark:text-gray-400 text-sm">
                  Repositories based on your interests
                </Text>
              </View>
              <Octicons name="chevron-right" size={20} color="#6e7781" />
            </TouchableOpacity>

            <TouchableOpacity className="p-4 flex-row items-center">
              <Octicons
                name="people"
                size={20}
                color="#0366d6"
                className="mr-3"
              />
              <View className="flex-1">
                <Text className="font-medium dark:text-white">
                  Suggested followers
                </Text>
                <Text className="text-gray-600 dark:text-gray-400 text-sm">
                  Users you might know
                </Text>
              </View>
              <Octicons name="chevron-right" size={20} color="#6e7781" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
