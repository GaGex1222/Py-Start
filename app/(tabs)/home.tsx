import { View, Text, Image, TextInput, KeyboardAvoidingView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MotiTextConfigured, MotiViewConfigured } from "@/components/MotiElementsConfigured";
import { ScrollView } from "moti";

export default function CoursesPage() {
  return (
    <KeyboardAvoidingView>
      <View className="flex-1 bg-gray-100">
        {/* Top Section */}
        <View className="h-[30%] flex justify-center items-center px-5">
          <LinearGradient colors={["#B8860B", "#FFDE57"]} className="absolute inset-0 rounded-b-3xl" />
          
          {/* Title */}
          <View className="w-full items-center mb-3">
            <MotiTextConfigured animationDelay={100} className="font-pextrabold text-white text-3xl text-center">
              Explore Our Courses
            </MotiTextConfigured>
            <MotiTextConfigured animationDelay={200} className="font-pmedium text-white text-md text-center mt-1">
              Master Python today.
            </MotiTextConfigured>
          </View>

          {/* Search Bar */}
          <View className="w-full px-5">
            <View className="bg-white rounded-full flex-row items-center px-4 py-2 shadow-md">
              <TextInput placeholder="Search courses..." className="flex-1 text-gray-700" />
            </View>
          </View>
        </View>

        {/* Courses List */}
        <View className="h-[73%] bg-white rounded-t-3xl p-5 shadow-lg -mt-5">
          <ScrollView showsVerticalScrollIndicator={false}>
            {[1, 2, 3, 5, 6, 7, 8, 9, 0, 0, 0].map((item, index) => (
              <MotiViewConfigured
                animationDelay={index * 100}
                key={index}
                className="flex-row items-center bg-gray-100 p-3 rounded-xl mb-3 shadow-sm"
              >
                <View className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Text className="text-white font-bold">✔</Text>
                </View>
                <View className="ml-3">
                  <Text className="text-lg text-primary font-pbold">Introduction</Text>
                  <Text className="text-primary text-sm font-pmedium">Variables allow user to hold...</Text>
                </View>
              </MotiViewConfigured>
            ))}
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
