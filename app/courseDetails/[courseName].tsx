import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Progress from "react-native-progress";
import { data } from '@/courseData';
import icons from '@/constants/icons';
import { LeftArrowIcon, RightArrowIcon } from '@/components/icons/Arrow';
import CustomButton from '@/components/CustomButton';
import { MotiTextConfigured, MotiViewConfigured } from '@/components/MotiElementsConfigured';

export default function CourseDetails() {
  const { courseName }: { courseName: string } = useLocalSearchParams();
  const course = data.find(item => item.title == courseName);
  const router = useRouter();

  if (!course) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-100">
        <Text className="text-xl font-bold text-red-500">Course not found</Text>
      </View>
    );
  }

  return (
    <>
      <View className="flex-1 bg-gray-100 p-7 justify-center items-center">
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/courses')}
          className="absolute top-5 left-5 bg-secondary p-3 w-12 h-12 flex items-center justify-center rounded-full shadow-md"
        >
          <LeftArrowIcon />
        </TouchableOpacity>

        <MotiTextConfigured animationDelay={0} className="text-4xl font-pbold text-center mb-6 text-primary">
          {courseName}
        </MotiTextConfigured>

        <MotiViewConfigured animationDelay={100}>
          <Image source={icons.hacker} className="w-72 h-72  mb-5" />
        </MotiViewConfigured>

        <MotiTextConfigured animationDelay={200} className="text-lg font-pmedium text-gray-700 mb-6 leading-relaxed text-center">
          {course.description}
        </MotiTextConfigured>
        
        <MotiViewConfigured animationDelay={300} className="flex-1 justify-end p-10 items-center">
          <CustomButton
            text="Get Started"
            Icon={RightArrowIcon}
            buttonStyles="py-3 px-6"
            handlePress={() => router.push('/(tabs)/courses')}
          />
        </MotiViewConfigured>
      </View>
    </>
  );
}
