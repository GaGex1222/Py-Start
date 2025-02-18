import { View, Text, Image, Pressable, Animated } from 'react-native'
import { MotiViewConfigured, MotiTextConfigured } from '@/components/MotiElementsConfigured'
import React, { useEffect, useState } from 'react'
import BackButton from '@/components/BackButton'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { CourseData } from '@/types/data'
import { coursesData } from '@/courseData'
import CustomButton from '@/components/CustomButton'
import { RightArrowIcon } from '@/components/icons/Arrow'
import { addCourseProgress } from '@/utils/asyncStorageFunctions'



const question = () => {
    const router = useRouter();
    const [questionIndex, setQuestionIndex] = useState(0);
    const {courseName}: {courseName: string} = useLocalSearchParams();
    const course: CourseData | undefined = coursesData.find(course => course.title == courseName)
    const [selectedAnswer, setSelectedAnswer] = useState<undefined | number>(undefined);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<undefined | boolean>(undefined);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [timer, setTimer] = useState(60);
    const [scaleValue] = useState(new Animated.Value(1)); 

    useEffect(() => {
        if(timer == 0){
            handleNextButton()
        }

        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
    
        return () => clearInterval(interval); 
    }, [timer])

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

    const handleSelectOption = (index: number) => {
        if(userAnswers.includes(index)){
            return
        }
        setSelectedAnswer(index)
    }

    const handleQuestionSubmit = async () => {
        if(selectedAnswer == undefined){
            return
        }

        if(selectedAnswer == course?.questionPages[questionIndex].correctAnswerIndex){ //if he is correct
            setSelectedAnswer(undefined)
            setIsAnswerCorrect(true)
            setTimeout(() => {
                setUserAnswers([])
                handleNextButton()
            }, 1000)
            setTimer(60)
        } else {
            setSelectedAnswer(undefined)
            setIsAnswerCorrect(false)
            setTimeout(() => {
                setUserAnswers([...userAnswers, selectedAnswer])
            }, 1000)
        }

        setTimeout(() => {
            setIsAnswerCorrect(undefined)
        }, 1000)
    }

    const handleBackButton = () => {
        if (questionIndex > 0){
          setQuestionIndex(questionIndex - 1)
        } else {
            router.push({pathname: `/[courseName]/info`, params: { courseName }})
        }
        
    }

    const getQuestionOptionColors = (index: number) => {
        if(userAnswers.includes(index)) return "bg-secondary opacity-50";
        if (isAnswerCorrect === undefined) return "bg-secondary";
        return isAnswerCorrect ? "bg-success border-success" : "bg-error border-error";
    };

    const handleNextButton = async () => {
        if (questionIndex + 1 == course?.questionPages.length){
          await addCourseProgress(courseName, 3)  
          router.push({pathname: `/[courseName]/summary`, params: { courseName }})
        } else {
          setQuestionIndex(questionIndex + 1)
          setTimer(60)
        }
    }

    return (
        <>
            <View className="flex-col p-7 justify-center items-center">
                <BackButton handlePress={handleBackButton} />
                <MotiTextConfigured
                    animationDelay={0}
                    className="text-3xl font-pbold ml-5 text-center text-primary mt-6" 
                >
                    {course?.questionPages[questionIndex].title}
                </MotiTextConfigured>
                <MotiTextConfigured
                    animationDelay={0}
                    className="text-3xl font-pbold text-center text-primary" 
                >
                    {timer}
                </MotiTextConfigured>
                <MotiViewConfigured animationDelay={200} className='w-full'>
                    <Image source={course?.questionPages[questionIndex].image} className='w-full h-80' style={{resizeMode: "contain"}}/>
                </MotiViewConfigured>
            </View>
            <View className="flex-1 p-7 justify-end">
                <View className="grid grid-rows-2 grid-cols-2 gap-4 w-full max-w-sm">
                    {course?.questionPages[questionIndex].options.map((option, index) => (
                        <MotiViewConfigured animationDelay={(index + 1) * 100 + 200} key={index}>
                            <Pressable
                                disabled={userAnswers.includes(index)}
                                onPressIn={handlePressIn}
                                onPressOut={handlePressOut}
                                onPress={() => handleSelectOption(index)} 
                            >
                                <Animated.View
                                    style={{
                                        transform: [{ scale: scaleValue }],
                                    }}
                                    className={`shadow-md h-20 border-2 rounded-lg justify-center items-center ${getQuestionOptionColors(index)} ${selectedAnswer == index ? "border-primary" : "border-secondary"}`}
                                >
                                    <Text className="text-primary font-pbold text-lg p-3">
                                        {option}
                                    </Text>
                                    <Text className='absolute top-7 left-5 text-primary font-pbold'>{(index + 1).toString() + "."}</Text>
                                </Animated.View>
                            </Pressable>
                        </MotiViewConfigured>
                    ))}
                </View>
                <MotiViewConfigured animationDelay={700}>
                    <CustomButton buttonStyles="mt-10" handlePress={handleQuestionSubmit} text="Submit Answer" Icon={RightArrowIcon} />
                </MotiViewConfigured>
            </View>
        </>
    )
}

export default question