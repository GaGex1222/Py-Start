import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";
import {images} from "@/constants/icons";
import { RightArrowIcon } from "@/components/icons/Arrow";
import CustomButton from "@/components/CustomButton";
import {
  MotiTextConfigured,
  MotiViewConfigured,
} from "@/components/MotiElementsConfigured";
import BackButton from "@/components/BackButton";
import { CourseData, Setter } from "@/types/data";

type CourseMainPageProps = {
    courseName: string
    courseData: CourseData | undefined
    setShowInfoPages: Setter<boolean>;
}

export const CourseMainPage: React.FC<CourseMainPageProps> = ({courseName, courseData, setShowInfoPages}) => {
    const router = useRouter()
    if (!courseData) {
        return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-xl font-bold text-red-500">Course not found</Text>
        </View>
        );
    }

    return (
        <>
        <View className="flex-1  p-7 justify-center items-center">
            <BackButton handlePress={() => router.push('/(tabs)/courses')}/>
            <MotiTextConfigured
            animationDelay={0}
            className="text-3xl font-pbold text-center mb-6 text-primary"
            >
            {courseName}
            </MotiTextConfigured>

            <MotiViewConfigured animationDelay={100}>
            <Image source={images.hacker} className="w-72 h-72  mb-5" />
            </MotiViewConfigured>

            <MotiTextConfigured
            animationDelay={200}
            className="text-lg font-pmedium text-gray-700 mb-6 leading-relaxed text-center"
            >
            {courseData.description}
            </MotiTextConfigured>

            <MotiViewConfigured
            animationDelay={300}
            className="flex-1 justify-end p-10 items-center"
            >
            <CustomButton
                text="Get Started"
                Icon={RightArrowIcon}
                handlePress={() => setShowInfoPages(true)}
                buttonStyles="py-3 px-6"
            />
            </MotiViewConfigured>
        </View>
        </>
    );
}
