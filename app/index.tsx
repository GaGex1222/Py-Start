
import React, { useEffect, useState } from 'react'
import icons from "@/constants/icons"
import { SvgUri } from 'react-native-svg';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MotiText, ScrollView } from "moti";
import {MotiTextConfigured, MotiViewConfigured} from '@/components/MotiElementsConfigured';
import InfoSection from '@/components/infoSection';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import * as SplashScreen from "expo-splash-screen"
import CustomButton from '@/components/CustomButton';
import { ArrowIcon } from '@/components/icons/Arrow';

SplashScreen.preventAutoHideAsync()

export default function WelcomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    async function prepare() {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
        setIsLoading(false)
      }, 2000);
    }
    prepare();
  }, []);

  if(!isLoading){
    return (
      <ScrollView>
          <View className="flex justify-center items-center min-h-screen bg-background">
            <View className="flex flex-col justify-center items-center p-4">
            <MotiViewConfigured className='h-auto w-auto' animationDelay={0}>
              <MotiTextConfigured animationDelay={0} className="text-primary text-4xl font-pextrabold">
                Learn With Py-Start!
              </MotiTextConfigured>
            </MotiViewConfigured>
    
              <MotiViewConfigured animationDelay={150}>
                <Image source={icons.hacker} className="w-80 h-80" />
              </MotiViewConfigured>
    
              <InfoSection animationDelay={450} text="Master Python with hands-on projects." />
              <InfoSection animationDelay={600} text="Learn at your own pace, no prior experience needed." />
              <InfoSection animationDelay={750} text="Unlock the power of Python in just a few weeks!" />
            </View>
            <MotiViewConfigured animationDelay={900}>
              <CustomButton text='Get Started' Icon={ArrowIcon} buttonStyles='mt-6' isLoading={isLoading} handlePress={() => router.replace('/login')}/>
            </MotiViewConfigured>
          </View>
      </ScrollView>
    );
  }
}


  