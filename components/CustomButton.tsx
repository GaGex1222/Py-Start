import { Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { CustomButtonProps } from '@/element-types'
import { MotiViewConfigured } from './MotiElementsConfigured'

const CustomButton: React.FC<CustomButtonProps> = ({buttonStyles, text, handlePress, isLoading, icon, iconStyles}) => {
  return (
    <TouchableOpacity disabled={isLoading} onPress={handlePress} className={`px-6 py-3 bg-secondary rounded-xl shadow-md ${isLoading && "opacity-50"} ${buttonStyles}`}>
      <View className="flex-row items-center justify-center">
        <Text className="text-primary text-lg font-pbold">{text}</Text>
        {icon && <Image source={icon} className={iconStyles} />}
      </View>
    </TouchableOpacity>
  )
}

export default CustomButton