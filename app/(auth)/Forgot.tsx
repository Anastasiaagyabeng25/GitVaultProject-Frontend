 import { useState } from "react";
 import { View, Text, TextInput, TouchableOpacity } from "react-native";
 import { router } from "expo-router";
 import { Ionicons } from "@expo/vector-icons";

 export default function ForgotPassword() {
   const [email, setEmail] = useState("");

   const handleReset = () => {
     // Simple reset logic
     alert("Password reset link sent to your email");
     router.back();
   };

   return (
     <View className="flex-1 bg-gray-900 px-6 justify-center">
       <TouchableOpacity
         className="absolute top-12 left-6 z-10"
         onPress={() => router.back()}
       >
         <Ionicons name="arrow-back" size={24} color="white" />
       </TouchableOpacity>

       <View className="items-center mb-8">
         <Ionicons name="logo-github" size={80} color="white" />
         <Text className="text-white text-2xl font-bold mt-4">
           Reset Password
         </Text>
         <Text className="text-gray-400 text-center mt-2">
           Enter your email to receive a reset link
         </Text>
       </View>

       <View className="space-y-4">
         <View>
           <Text className="text-white text-sm mb-2">Email</Text>
           <TextInput
             className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700"
             value={email}
             onChangeText={setEmail}
             placeholder="Enter your email"
             placeholderTextColor="#6b7280"
             keyboardType="email-address"
           />
         </View>

         <TouchableOpacity
           className="bg-green-600 py-4 rounded-lg mt-6"
           onPress={handleReset}
         >
           <Text className="text-white text-center font-semibold text-lg">
             Send reset link
           </Text>
         </TouchableOpacity>
       </View>
     </View>
   );
 }