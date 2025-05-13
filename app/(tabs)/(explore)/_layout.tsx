import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Explore" }} />
      <Stack.Screen name="awesomelists" options={{ title: "Awesome Lists" }} />
      <Stack.Screen name="trendingrepos" options={{ title: "Trending Repositories" }} />
    </Stack>
  );
}
