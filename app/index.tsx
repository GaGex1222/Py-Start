
import React from 'react'
import icons from "@/constants/icons"
import { SvgUri } from 'react-native-svg';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MotiText } from "moti";
import {MotiTextConfigured, MotiViewConfigured} from '@/components/MotiElementsConfigured';
import InfoSection from '@/components/infoSection';

export default function WelcomeScreen() {
  return (
    <View className="flex justify-center items-center min-h-screen bg-background">
      <View className="flex flex-col justify-center items-center p-4">
        <MotiViewConfigured animationDelay={150} >
          <Image source={icons.hacker} className="w-80 h-80" />
        </MotiViewConfigured>

        <MotiTextConfigured animationDelay={300} className="text-4xl text-primary font-pextrabold drop-shadow-lg text-center">
          Master Python, Effortlessly.
        </MotiTextConfigured>

        <InfoSection animationDelay={450} text='Master Python with hands-on projects.'/>
        <InfoSection animationDelay={600} text='Learn at your own pace, no prior experience needed.'/>
        <InfoSection animationDelay={750} text='Unlock the power of Python in just a few weeks!'/>
      </View>

      <MotiViewConfigured animationDelay={900}>
        <TouchableOpacity className="mt-6 px-6 py-3 bg-secondary rounded-lg shadow-md flex flex-row">
          <Text className="text-primary text-lg font-pbold">Get Started</Text>
        </TouchableOpacity>
      </MotiViewConfigured>
    </View>
  );
}

  
