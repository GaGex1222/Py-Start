import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useRouter } from 'expo-router'
import BackButton from '@/components/BackButton'
import { MotiTextConfigured, MotiViewConfigured } from '@/components/MotiElementsConfigured'
import { images } from '@/constants/icons'
import * as Progress from "react-native-progress";
import CustomButton from '@/components/CustomButton'
import { RightArrowIcon } from '@/components/icons/Arrow'
const Summary = () => {
    const router = useRouter();
    const {courseName}: {courseName: string} = useLocalSearchParams();
    return (
        <View className="flex-col p-7 justify-center items-center">
            <BackButton handlePress={() => router.push({ pathname: `/[courseName]/question`, params: { courseName } })} />

            <MotiTextConfigured animationDelay={0} className="text-3xl font-pbold ml-5 text-center text-primary mt-6">
                Congratulations on finishing the course!
            </MotiTextConfigured>

            <Image source={images.hacker} className="w-80 h-80 my-5"/>

            <MotiTextConfigured animationDelay={100} className="text-lg font-pmedium text-gray-700 text-center px-5">
                You've successfully completed <Text className="text-primary font-pbold">{courseName}</Text>! 
                Keep practicing and check out more courses to expand your skills.
            </MotiTextConfigured>

            <MotiViewConfigured animationDelay={200} className="w-full px-5 mt-5">
                <View className="bg-white p-4 rounded-xl shadow-lg w-full">
                    <Text className="text-xl font-pbold text-center text-primary">Your Progress</Text>
                    <Progress.Bar progress={1} color="#4584b6" width={250} className="mt-3"/>
                    <Text className="text-center text-gray-500 mt-2">100% Completed</Text>
                </View>
            </MotiViewConfigured>

            <MotiViewConfigured animationDelay={300} className="w-full px-5 mt-5">
                <Text className="text-lg font-pbold text-gray-700 text-center">
                    What’s Next?
                </Text>
                <MotiViewConfigured animationDelay={400} className="flex-col justify-center mt-3">
                    <CustomButton Icon={RightArrowIcon} text='Explore More Courses' handlePress={() => router.push('/courses')}/>
                    <CustomButton Icon={RightArrowIcon} text='Retry course!' buttonStyles='mt-3' handlePress={() => router.push({pathname: `/[courseName]`, params: { courseName }})}/>
                </MotiViewConfigured>
            </MotiViewConfigured>
        </View>
    )
}

export default Summary