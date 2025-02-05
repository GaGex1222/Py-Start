import { SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from 'react-native'
import { MotiViewConfigured } from '@/components/MotiElementsConfigured'
import icons from '@/constants/icons'
import CustomButton from '@/components/CustomButton'
import { useState } from 'react'
import {
    GoogleSignin,
    GoogleSigninButton,
    isCancelledResponse,
    isErrorWithCode,
    isSuccessResponse,
    statusCodes,
  } from '@react-native-google-signin/google-signin';



const Login = () => {
    const [userInfo, setUserinfo] = useState();
    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
        offlineAccess: true, 
      });

    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const response = await GoogleSignin.signIn();
          if (isSuccessResponse(response)) {
            setUserinfo({ userInfo: response.data });
          } else {
            // sign in was cancelled by user
          }
        } catch (error) {
          if (isErrorWithCode(error)) {
            switch (error.code) {
              case statusCodes.IN_PROGRESS:
                // operation (eg. sign in) already in progress
                break;
              case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                // Android only, play services not available or outdated
                break;
              default:
              // some other error happened
            }
          } else {
            // an error that's not related to google sign in occurred
          }
        }
      };


    async function getUserInfo(token: string | undefined){
        try{
            const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
                headers: {Authorization: `Bearer ${token}`}
            })
            const user = await response.json()
            setUserinfo(user)
        } catch(exc){
            console.error("Error getting user info with access token", exc)
        }
    } //here frontend start so i cut it
    return (
        <SafeAreaView>
            <MotiViewConfigured animationDelay={0} className='flex justify-center items-center'>
                <Image source={icons.logoWithText} className='h-80 w-80'/>
                <MotiViewConfigured animationDelay={150}>
                    <CustomButton handlePress={() => signIn()} text='Sign in with google' icon={icons.googleLogo} iconStyles='w-6 h-6 ml-2' buttonStyles='mt-24 p-6'/>
                </MotiViewConfigured>
            </MotiViewConfigured>
        </SafeAreaView>
    )
}

export default Login