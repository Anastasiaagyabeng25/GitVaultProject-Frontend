import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="issues" options={{ title: "Issues" }} />
      <Stack.Screen name="pullrequest" options={{ title: "Pull Request" }} />
      <Stack.Screen name="discussions" options={{ title: "Discussions" }} />
      <Stack.Screen name="projects" options={{ title: "Projects" }} />
      <Stack.Screen name="repositories" options={{ title: "Repositories" }} />
      <Stack.Screen name="organizations" options={{ title: "Organizations" }} />
      <Stack.Screen name="starred" options={{ title: "Starred" }} />
      <Stack.Screen name="search" options={{ title: "Search" }} />
    </Stack>
  );
}
