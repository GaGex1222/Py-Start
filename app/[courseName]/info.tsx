import { View, ScrollView, Text } from 'react-native'
import React, { useState } from 'react'
import BackButton from '@/components/BackButton'
import { MotiViewConfigured, MotiTextConfigured } from '@/components/MotiElementsConfigured'
import { RightArrowIcon } from '@/components/icons/Arrow'
import CustomButton from '@/components/CustomButton'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { coursesData } from '@/courseData'
import { addCourseProgress } from '@/utils/asyncStorageFunctions'

const InformationPage = () => {
    const { courseName }: { courseName: string } = useLocalSearchParams();
    const [pageIndex, setPageIndex] = useState(0);
    const router = useRouter();
    const course = coursesData.find(course => course.title === courseName);

    // Ensure course is defined and informationPages is not undefined
    const informationPages = course?.informationPages || [];

    const handleBackButton = () => {
        if (pageIndex > 0) {
            setPageIndex(pageIndex - 1);
        } else {
            router.push({ pathname: `/[courseName]`, params: { courseName } });
        }
    };

    const handleNextButton = async () => {
        if (pageIndex + 1 === informationPages.length) {
            await addCourseProgress(course?.title as string, 2);
            router.push({ pathname: `/[courseName]/question`, params: { courseName } });
        } else {
            setPageIndex(pageIndex + 1);
        }
    };

    return (
        <View className="flex-1 p-7 justify-center items-center">
            <BackButton handlePress={handleBackButton} />
            <MotiTextConfigured
                animationDelay={0}
                className="text-3xl font-pbold text-center text-primary"
            >
                {informationPages[pageIndex]?.title}
            </MotiTextConfigured>
            <MotiViewConfigured className="w-full max-h-64 my-4 p-3 bg-gray-200 rounded-lg" animationDelay={100}>
                <ScrollView>
                    <Text className="font-mono text-sm text-gray-800">
                        {informationPages[pageIndex]?.code}
                    </Text>
                </ScrollView>
            </MotiViewConfigured>

            <ScrollView>
                <MotiTextConfigured
                    animationDelay={200}
                    className="text-lg font-pmedium w-80 text-gray-700 mb-6 text-center leading-relaxed"
                >
                    {informationPages[pageIndex]?.infoParagraph}
                </MotiTextConfigured>
            </ScrollView>

            <MotiViewConfigured
                animationDelay={300}
                className="flex-1 justify-end p-10 items-center"
            >
                <CustomButton
                    text="Continue"
                    Icon={RightArrowIcon}
                    handlePress={handleNextButton}
                    buttonStyles="py-3 mt-10 px-6"
                />
            </MotiViewConfigured>
        </View>
    );
};

export default InformationPage;
