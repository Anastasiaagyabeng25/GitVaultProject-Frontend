import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import RepositoryCard from "./RepositoryCard";
import { Repository } from "../types/types.js";

interface ExploreTrendingSectionProps {
  repositories: Repository[];
}

const ExploreTrendingSection: React.FC<ExploreTrendingSectionProps> = ({
  repositories,
}) => {
  return (
    <View className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-lg font-bold dark:text-white">
          Trending Repositories
        </Text>
        <TouchableOpacity>
          <Text className="text-blue-500">See all</Text>
        </TouchableOpacity>
      </View>

      <View className="space-y-3">
        {repositories.map((repo) => (
          <View key={repo.id} className="space-y-1">
            <RepositoryCard repository={repo} />
            {repo.trending && (
              <View className="flex-row items-center px-3">
                <Octicons name="flame" size={14} color="#f85149" />
                <Text className="ml-1 text-xs text-gray-600 dark:text-gray-400">
                  {repo.trending}
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default ExploreTrendingSection;
