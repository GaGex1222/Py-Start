import { View, Text, Image, Pressable, Animated } from 'react-native'
import { MotiViewConfigured, MotiTextConfigured } from '@/components/MotiElementsConfigured'
import React, { useState } from 'react'
import BackButton from '@/components/BackButton'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useRoute } from '@react-navigation/native'
import { CourseData } from '@/types/data'
import { coursesData } from '@/courseData'
import { images } from '@/constants/icons'
import CustomButton from '@/components/CustomButton'
import SubmitIcon from '@/components/icons/Submit'
import { RightArrowIcon } from '@/components/icons/Arrow'
const question = () => {
    const router = useRouter();
    const [questionIndex, setQuestionIndex] = useState(0);
    const {courseName}: {courseName: string} = useLocalSearchParams();
    const [selectedAnswer, setSelectedAnswer] = useState<undefined | number>(undefined);
    const course: CourseData | undefined = coursesData.find(course => course.title == courseName)
    
    const [scaleValue] = useState(new Animated.Value(1)); 

    const handlePressIn = () => {
      Animated.spring(scaleValue, {
        toValue: 0.95, 
        useNativeDriver: true,
      }).start();
    };
  
    const handlePressOut = () => {
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    };

    const handleBackButton = () => {
        if (questionIndex > 0){
          setQuestionIndex(questionIndex - 1)
        } else {
            router.push({pathname: `/[courseName]/info`, params: { courseName }})
        }
    }

    const handleSubmitAnswer = () => {
        handleNextButton()
    }

    const handleNextButton = () => {
        if (questionIndex + 1 == course?.questionPages.length){
          router.push({pathname: `/[courseName]/info`, params: { courseName }})
        } else {
          console.log("GSGSGG")
          setQuestionIndex(questionIndex + 1)
        }
    }

    return (
        <>
            <View className="flex-col p-7 justify-center items-center">
                <BackButton handlePress={handleBackButton}/>
                <MotiTextConfigured
                    animationDelay={0}
                    className="text-3xl font-pbold text-center mb-6 mt-10 text-primary"
                >
                    {course?.questionPages[questionIndex].title}
                </MotiTextConfigured>
                {course?.questionPages[questionIndex].image ? (
                    <Image source={course?.questionPages[questionIndex].image} className='w-full h-80' style={{resizeMode: "contain"}}/>
                ): (
                    <Image source={images.hacker} className='w-full h-80' style={{resizeMode: "contain"}}/>
                )}
            </View>
            <View className="flex-row flex-wrap mt-20 justify-center gap-4">
                {course?.questionPages[questionIndex].options.map((option, index) => (
                    <Pressable
                    key={index}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    onPress={() => setSelectedAnswer(index)}
                    >
                    <Animated.View
                        style={{
                        transform: [{ scale: scaleValue }], 
                        }}
                        className={`w-52 shadow-md h-20 bg-secondary border-2 rounded-lg justify-center items-center ${
                        selectedAnswer == index ? "border-primary" : "border-secondary"
                        }`}
                    >
                        <Text className="text-primary font-pbold text-lg p-3 font-bold">
                            {option}
                        </Text>
                    </Animated.View>
                    </Pressable>
                ))}
                <CustomButton buttonStyles='mt-10' handlePress={handleSubmitAnswer} text='Submit Answer' Icon={RightArrowIcon}/>
            </View>
        </>
    )
}

export default question