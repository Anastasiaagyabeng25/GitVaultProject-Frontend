// // app/(auth)/_layout.tsx - Auth layout
// import { Stack } from "expo-router";

// export default function AuthLayout() {
//   // This layout wraps the authentication screens
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="login" />
//       <Stack.Screen name="register" />
//     </Stack>
//   );
// }
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" />
      <Stack.Screen name="SignUp" />
      <Stack.Screen name="Forgot" />
    </Stack>
  );
}