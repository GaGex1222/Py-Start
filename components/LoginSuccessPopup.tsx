import { View, Text } from 'react-native'
import React from 'react'
import { MotiViewConfigured } from './MotiElementsConfigured'

const LoginSuccessPopup = () => {
  return (
    <MotiViewConfigured animationDelay={100} className='absolute top-0 left-0 right-0 bottom-0 flex justify-center w items-center bg-black bg-opacity-50'>
      <Text>LoginSuccessPopup</Text>
    </MotiViewConfigured>
  )
}

export default LoginSuccessPopup