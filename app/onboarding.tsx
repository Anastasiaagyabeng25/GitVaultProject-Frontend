import { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

interface OnboardingSlide {
  id: number;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

const slides: OnboardingSlide[] = [
  {
    id: 1,
    title: "Welcome to GitHub",
    description:
      "Build software better, together. Collaborate on code with millions of developers worldwide.",
    icon: "logo-github",
    color: "#22c55e",
  },
  {
    id: 2,
    title: "Code Collaboration",
    description:
      "Work together on projects, review code, and track changes with powerful version control.",
    icon: "git-branch",
    color: "#3b82f6",
  },
  {
    id: 3,
    title: "Issue Tracking",
    description:
      "Plan, track, and manage your work with integrated issue tracking and project boards.",
    icon: "bug",
    color: "#f59e0b",
  },
  {
    id: 4,
    title: "Open Source",
    description:
      "Discover amazing open source projects and contribute to the global developer community.",
    icon: "heart",
    color: "#ef4444",
  },
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      const nextIndex = currentSlide + 1;
      setCurrentSlide(nextIndex);
      scrollViewRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      });
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      const prevIndex = currentSlide - 1;
      setCurrentSlide(prevIndex);
      scrollViewRef.current?.scrollTo({
        x: prevIndex * width,
        animated: true,
      });
    }
  };

  const skipOnboarding = () => {
    router.replace("/(auth)/SignIn");
  };

  const getStarted = () => {
    router.replace("/(auth)/SignUp");
  };

  const handleScroll = (event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    setCurrentSlide(index);
  };

  return (
    <View className="flex-1 bg-gray-900">
      {/* Header */}
      <View className="flex-row justify-between items-center pt-12 px-6 pb-4">
        <TouchableOpacity onPress={skipOnboarding}>
          <Text className="text-gray-400 text-base">Skip</Text>
        </TouchableOpacity>
        <Text className="text-gray-400 text-sm">
          {currentSlide + 1} of {slides.length}
        </Text>
      </View>

      {/* Slides */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        className="flex-1"
      >
        {slides.map((slide) => (
          <View
            key={slide.id}
            style={{ width }}
            className="flex-1 px-8 justify-center"
          >
            <View className="items-center">
              {/* Icon */}
              <View
                className="w-32 h-32 rounded-full items-center justify-center mb-8"
                style={{ backgroundColor: `${slide.color}20` }}
              >
                <Ionicons name={slide.icon} size={64} color={slide.color} />
              </View>

              {/* Title */}
              <Text className="text-white text-3xl font-bold text-center mb-4">
                {slide.title}
              </Text>

              {/* Description */}
              <Text className="text-gray-400 text-lg text-center leading-6 px-4">
                {slide.description}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View className="flex-row justify-center items-center mb-8">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentSlide ? "bg-white" : "bg-gray-600"
            }`}
          />
        ))}
      </View>

      {/* Navigation Buttons */}
      <View className="px-6 pb-8">
        {currentSlide === slides.length - 1 ? (
          <TouchableOpacity
            className="bg-green-600 py-4 rounded-lg"
            onPress={getStarted}
          >
            <Text className="text-white text-center font-semibold text-lg">
              Get Started
            </Text>
          </TouchableOpacity>
        ) : (
          <View className="flex-row justify-between">
            <TouchableOpacity
              className={`flex-1 py-4 rounded-lg mr-3 ${
                currentSlide === 0 ? "bg-gray-800" : "bg-gray-700"
              }`}
              onPress={prevSlide}
              disabled={currentSlide === 0}
            >
              <Text
                className={`text-center font-semibold text-lg ${
                  currentSlide === 0 ? "text-gray-500" : "text-white"
                }`}
              >
                Previous
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-1 bg-green-600 py-4 rounded-lg ml-3"
              onPress={nextSlide}
            >
              <Text className="text-white text-center font-semibold text-lg">
                Next
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
