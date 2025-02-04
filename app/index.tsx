
import React, { useEffect, useState } from 'react'
import icons from "@/constants/icons"
import { SvgUri } from 'react-native-svg';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MotiText } from "moti";
import {MotiTextConfigured, MotiViewConfigured} from '@/components/MotiElementsConfigured';
import InfoSection from '@/components/infoSection';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

export default function WelcomeScreen() {
  const [appReady, setAppReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
        setAppReady(true)
      }, 2000);
    }
    prepare();
  }, []);

  if(appReady){
    return (
      <SafeAreaView>
        
        <View className="flex justify-center items-center min-h-screen bg-background">
          <View className="flex flex-col justify-center items-center p-4">
            
          <MotiViewConfigured className='h-auto w-auto' animationDelay={0}>
            <MotiTextConfigured animationDelay={0} className="text-primary text-4xl font-pextrabold">
              Learn With Py-Start
            </MotiTextConfigured>
          </MotiViewConfigured>
  
            {/* Image */}
            <MotiViewConfigured animationDelay={150}>
              <Image source={icons.hacker} className="w-80 h-80" />
            </MotiViewConfigured>
  
            {/* Info Sections */}
            <InfoSection animationDelay={450} text="Master Python with hands-on projects." />
            <InfoSection animationDelay={600} text="Learn at your own pace, no prior experience needed." />
            <InfoSection animationDelay={750} text="Unlock the power of Python in just a few weeks!" />
          </View>
  
          {/* Button */}
          <MotiViewConfigured animationDelay={900}>
            <TouchableOpacity className="mt-6 px-6 py-3 bg-secondary rounded-xl shadow-md flex flex-row">
              <Text className="text-primary text-lg font-pbold">Get Started   🚀</Text>
            </TouchableOpacity>
          </MotiViewConfigured>
        </View>
      </SafeAreaView>
    );
  }
}


  