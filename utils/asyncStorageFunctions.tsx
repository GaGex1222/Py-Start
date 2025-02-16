import AsyncStorage from '@react-native-async-storage/async-storage';
import { coursesData } from '@/courseData';
import { CourseData } from '@/types/data';
import * as Device from 'expo-device';


export const checkFirstTime = async () => {
    if(await AsyncStorage.getItem('username')){
        return true
    }
    return false
}



export const createUserData = async (username: string) => {
    const coursesTitles: { [courseTitle: string]: number } = {}
    coursesData.map((item: CourseData) => {
        coursesTitles[item.title] = 0
    })
    await AsyncStorage.setItem('username', username)
    await AsyncStorage.setItem('userCoursesData', JSON.stringify(coursesTitles))
}