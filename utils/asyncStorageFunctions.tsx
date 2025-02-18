import AsyncStorage from '@react-native-async-storage/async-storage';
import { coursesData } from '@/courseData';
import { CourseData, UserCoursesData } from '@/types/data';

export const checkFirstTime = async () => {
    if(await AsyncStorage.getItem('username')){
        return true
    }
    return false
}



export const createUserData = async (username: string) => {
    const coursesTitles: UserCoursesData = {}
    coursesData.map((item: CourseData) => {
        coursesTitles[item.title] = 0
    })
    await AsyncStorage.setItem('username', username)
    await AsyncStorage.setItem('userCoursesData', JSON.stringify(coursesTitles))
}

export const addCourseProgress = async (courseTitle: string, progress: number) => {
    const jsonValue = await AsyncStorage.getItem('userCoursesData');
    console.log("HII", jsonValue)
    const userCoursesData = JSON.parse(jsonValue as string);
    console.log(courseTitle)
    console.log("HIssssI", userCoursesData)
    userCoursesData[courseTitle] = progress;
    await AsyncStorage.setItem("userCoursesData", JSON.stringify(userCoursesData));
    console.log("Updated value:", userCoursesData[courseTitle]);
}

export const getUserCoursesData = async () => {
    return await AsyncStorage.getItem('userCoursesData')
}

export const getUsername = async () => {
    return await AsyncStorage.getItem('username')
}