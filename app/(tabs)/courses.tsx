import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  MotiTextConfigured,
  MotiViewConfigured,
} from "@/components/MotiElementsConfigured"
import * as Progress from "react-native-progress";
import { Link, useRouter } from "expo-router";
import { coursesData } from "@/courseData";
import { CourseData, UserCoursesData } from "@/types/data";
import { getUserCoursesData } from "@/utils/asyncStorageFunctions";

export default function CoursesPage() {
  const [courseSearch, setCourseSearch] = useState("");
  const router = useRouter();
  const [userData, setUserData] = useState<UserCoursesData>({});
  useEffect(() => {
    const getUserData = async () => {
      const userData: UserCoursesData = JSON.parse(await getUserCoursesData() as string)
      setUserData(userData)
      console.log(userData)
    }
    getUserData()
  }, []);

  const handleCourseClick = (courseName: string) => {
    const userCourseProgression = userData[courseName]
    if(userCourseProgression == 0){
      router.push(`/${courseName}`)
    } else if(userCourseProgression == 1){
      router.push({pathname: `/[courseName]/info`, params: { courseName }})
    } else if(userCourseProgression == 2){
      router.push({pathname: `/[courseName]/question`, params: { courseName }})
    }
  }

  {!userData && (
    <View className="flex justify-center items-center">
      <Text className="text-error text-3xl text-center">Cant get user data</Text>
    </View>
  )}

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="flex-1 bg-gray-100">
        <View className="h-[30%] flex justify-center items-center px-5">
          <LinearGradient
            colors={["#B8860B", "#FFDE57"]}
            className="absolute inset-0 rounded-b-3xl"
          />

          <View className="w-full items-center mb-3">
            <MotiTextConfigured
              animationDelay={100}
              className="font-pextrabold text-white text-3xl text-center"
            >
              Explore Our Courses
            </MotiTextConfigured>
            <MotiTextConfigured
              animationDelay={200}
              className="font-pmedium text-white text-md text-center mt-1"
            >
              Master Python today.
            </MotiTextConfigured>
          </View>

          <MotiViewConfigured animationDelay={300} className="w-full px-5">
            <View className="bg-white rounded-full flex-row items-center px-4 py-2 shadow-lg">
              <TextInput
                placeholder="Search courses..."
                onChangeText={setCourseSearch}
                className="flex-1 text-gray-700"
              />
            </View>
          </MotiViewConfigured>
        </View>

        <View className="h-[73%] bg-white rounded-t-3xl p-5 shadow-lg -mt-5">
          <ScrollView showsVerticalScrollIndicator={false}>
            {coursesData.map((course: CourseData, index: number) => {
              const userProgress = userData[course.title] || 0;
              const progress = userProgress / 3;
              const isCompleted = progress >= 1;

              return (courseSearch === "" || course.title.toLowerCase().includes(courseSearch.toLowerCase())) && (
                <MotiViewConfigured
                  animationDelay={index * 100}
                  key={index}
                  className={`flex-row items-center justify-start p-3 h-20 rounded-xl mb-3 shadow-sm
                    ${isCompleted ? "bg-green-200 opacity-80" : "bg-gray-100"}`}
                >
                  <Image source={course.topicIcon} className="w-10 h-10" />

                  <View className="ml-3 flex-1">
                    <TouchableOpacity onPress={() => handleCourseClick(course.title)}>
                      <Text className={`text-lg font-pbold ${isCompleted ? "text-green-700" : "text-primary"}`}>
                        {course.title} {isCompleted && "✓"}
                      </Text>
                      <Progress.Bar progress={progress} className="mt-2" color={isCompleted ? "#4CAF50" : "#4584b6"} width={250} />
                    </TouchableOpacity>
                  </View>
                </MotiViewConfigured>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
