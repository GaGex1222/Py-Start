import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { coursesData } from '@/courseData'
import { CourseData } from '@/types/data'
import BackButton from '@/components/BackButton'
const Summary = () => {
    const {courseName}: {courseName: string} = useLocalSearchParams();
    const course: CourseData | undefined = coursesData.find(course => course.title == courseName)
    return (
        <View>
            <BackButton/>
        </View>
    )
}

export default Summary