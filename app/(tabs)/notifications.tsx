import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from "expo-router";
import NotificationScreen from "../../screens/NotificationScreen";


const notifications = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <NotificationScreen />
    </>
  );
}

export default notifications



