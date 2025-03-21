import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, Stack } from 'expo-router'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { coursesData } from '@/courseData';

const _layout = () => {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("@/assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("@/assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("@/assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("@/assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("@/assets/fonts/Poppins-Thin.ttf"),
    });

    if(error){
        console.log("Error loading fonts", error)
    }

  return (
    <View className=" bg-tertiary h-full">
      <Slot/>
    </View>
  )
}

export default _layout