
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Repository } from "../types/types";

interface RepositoryCardProps {
  repository: Repository;
}

const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  Python: "#3572A5",
  Java: "#b07219",
  "C++": "#f34b7d",
  Ruby: "#701516",
  Go: "#00ADD8",
  Swift: "#ffac45",
  Kotlin: "#F18E33",
  Dart: "#00B4AB",
};

export default function RepositoryCard({ repository }: RepositoryCardProps) {
  const { name, description, language, stars, forks, isPrivate } = repository;

  return (
    <TouchableOpacity className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
      <View className="flex-row justify-between items-start">
        <View className="flex-1">
          <View className="flex-row items-center">
            <Octicons
              name={isPrivate ? "lock" : "repo"}
              size={16}
              color={isPrivate ? "#6a737d" : "#0366d6"}
            />
            <Text
              className="ml-2 font-medium text-blue-600 dark:text-blue-400"
              numberOfLines={1}
            >
              {name}
            </Text>
          </View>

          {description && (
            <Text
              className="text-gray-600 dark:text-gray-400 text-sm mt-1"
              numberOfLines={2}
            >
              {description}
            </Text>
          )}

          <View className="flex-row items-center mt-2">
            {language && (
              <View className="flex-row items-center mr-3">
                <View
                  style={{
                    backgroundColor: languageColors[language] || "#8257e5",
                  }}
                  className="w-3 h-3 rounded-full mr-1"
                />
                <Text className="text-xs text-gray-600 dark:text-gray-400">
                  {language}
                </Text>
              </View>
            )}

            {stars > 0 && (
              <View className="flex-row items-center mr-3">
                <Octicons name="star" size={14} color="#6a737d" />
                <Text className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                  {stars}
                </Text>
              </View>
            )}

            {forks > 0 && (
              <View className="flex-row items-center">
                <Octicons name="repo-forked" size={14} color="#6a737d" />
                <Text className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                  {forks}
                </Text>
              </View>
            )}
          </View>
        </View>

        <TouchableOpacity className="p-1">
          <Octicons name="star" size={18} color="#6a737d" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};