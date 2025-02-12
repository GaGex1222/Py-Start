import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { LeftArrowIcon } from './icons/Arrow'

type BackButtonProps = {
    handlePress: () => void
}

const BackButton: React.FC<BackButtonProps> = ({handlePress}) => {
    const router = useRouter()
    return (
        <TouchableOpacity
            onPress={handlePress}
            className="absolute top-4 left-4 bg-secondary p-6  w-12 h-12 flex items-center justify-center rounded-full shadow-md"
        >
            <LeftArrowIcon />
        </TouchableOpacity>
    )
}

export default BackButton