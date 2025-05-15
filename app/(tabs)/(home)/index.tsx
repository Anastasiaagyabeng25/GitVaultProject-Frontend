import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from "../../../screens/HomeScreen";
import { Stack } from "expo-router";

const index = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <HomeScreen />
    </>
  );
}

export default index