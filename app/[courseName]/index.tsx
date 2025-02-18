import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Image } from "react-native";
import {images} from "@/constants/icons";
import { RightArrowIcon } from "@/components/icons/Arrow";
import CustomButton from "@/components/CustomButton";
import {MotiTextConfigured, MotiViewConfigured} from "@/components/MotiElementsConfigured";
import BackButton from "@/components/BackButton";
import { CourseData } from "@/types/data";
import { coursesData } from "@/courseData";
import { addCourseProgress } from "@/utils/asyncStorageFunctions";

export default function CourseMainPage(){
    const {courseName}: {courseName: string} = useLocalSearchParams();
    const course: CourseData | undefined = coursesData.find(course => course.title === courseName);

    const router = useRouter()
    if (!course) {
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
            {course.description}
            </MotiTextConfigured>

            <MotiViewConfigured
            animationDelay={300}
            className="flex-1 justify-end p-10 items-center"
            >
            <CustomButton
                text="Get Started"
                Icon={RightArrowIcon}
                handlePress={async () => {router.push({pathname: `/[courseName]/info`, params: {courseName}}); await addCourseProgress(course?.title as string, 1)}}
                buttonStyles="py-3 px-6"
            />
            </MotiViewConfigured>
        </View>
        </>
    );
}
