import React, { useEffect, useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MotiTextConfigured, MotiViewConfigured } from "@/components/MotiElementsConfigured";
import icons from "@/constants/icons";
import * as Progress from "react-native-progress"
import { Link } from "expo-router";
import { data } from "@/courseData";
import { coursesData } from "@/types/data";

export default function CoursesPage() {
  const [courseSearch, setCourseSearch] = useState('');
  useEffect(() => {
    console.log(courseSearch)
  }, [courseSearch])
  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="flex-1 bg-gray-100">
        <View className="h-[30%] flex justify-center items-center px-5">
          <LinearGradient colors={["#B8860B", "#FFDE57"]} className="absolute inset-0 rounded-b-3xl" />
          
          <View className="w-full items-center mb-3">
            <MotiTextConfigured animationDelay={100} className="font-pextrabold text-white text-3xl text-center">
              Explore Our Courses
            </MotiTextConfigured>
            <MotiTextConfigured animationDelay={200} className="font-pmedium text-white text-md text-center mt-1">
              Master Python today.
            </MotiTextConfigured>
          </View>

          <MotiViewConfigured animationDelay={300} className="w-full px-5">
            <View className="bg-white rounded-full flex-row items-center px-4 py-2 shadow-lg">
              <TextInput placeholder="Search courses..." onChangeText={setCourseSearch} className="flex-1 text-gray-700" />
            </View>
          </MotiViewConfigured>
        </View>

        <View className="h-[73%] bg-white rounded-t-3xl p-5 shadow-lg -mt-5">
          <ScrollView showsVerticalScrollIndicator={false}>
            {data.map((item: coursesData, index: number) => (
              (courseSearch === "" || item.title.toLowerCase().includes(courseSearch.toLowerCase())) && (
                <MotiViewConfigured
                  animationDelay={index * 100}
                  key={index}
                  className="flex-row items-center justify-start bg-gray-100 p-3 h-20 rounded-xl mb-3 shadow-sm"
                >
                  <Image source={icons[item.title.toLowerCase() as keyof typeof icons]} className="w-10 h-10"/>

                  <View className="ml-3 flex-1">
                    <Link href={{ pathname: "/courseDetails/[courseName]", params: { courseName: item.title } }}>
                      <Text className="text-lg text-primary font-pbold">{item.title}</Text>
                      <Progress.Bar progress={0.5} className="mt-2" color="#4584b6" width={250} />
                    </Link>
                  </View>
                </MotiViewConfigured>
              )
            ))}
          </ScrollView>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
}
