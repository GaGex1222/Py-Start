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
    await AsyncStorage.setItem("userCurrentCourse", "0")
    await AsyncStorage.setItem('username', username)
    await AsyncStorage.setItem('userCoursesData', JSON.stringify(coursesTitles))
}

export const addCourseProgress = async (courseTitle: string, progress: number) => {
    const jsonValue = await AsyncStorage.getItem('userCoursesData');
    const userCoursesData = JSON.parse(jsonValue as string);
    if(userCoursesData[courseTitle] == 3){
        return
    }
    userCoursesData[courseTitle] = progress;
    await AsyncStorage.setItem("userCoursesData", JSON.stringify(userCoursesData));
    console.log("Updated value:", userCoursesData[courseTitle]);
}

export const getUserCoursesData = async () => {
    console.log("NOW GETGTING USER DATA")
    return await AsyncStorage.getItem('userCoursesData')
}

export const getUsername = async () => {
    return await AsyncStorage.getItem('username')
}

export const addNonExistentCourse = async (courseName: string) => {
    const jsonValue = await AsyncStorage.getItem('userCoursesData');
    const userCoursesData = JSON.parse(jsonValue as string) || {};
    userCoursesData[courseName] = 0;
    await AsyncStorage.setItem("userCoursesData", JSON.stringify(userCoursesData));
}

export const deleteUserData = async () => {
    await AsyncStorage.clear()
    console.log("Cleaned user data!")
}

export const getUserCurrentCourse = async () => {
   return await AsyncStorage.getItem("userCurrentCourse")
}

export const setUserCurrentCourse = async (currentCourse: string) => {
    await AsyncStorage.setItem("userCurrentCourse", currentCourse)
}