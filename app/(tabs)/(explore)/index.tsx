import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from "expo-router";
import ExploreScreen from "../../../screens/ExploreScreen";


const index = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ExploreScreen />
    </>
  );
}

export default index







