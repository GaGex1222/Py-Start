import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LeftArrowIcon } from './icons/Arrow'

type BackButtonProps = {
    handlePress: () => void
}

const BackButton: React.FC<BackButtonProps> = ({handlePress}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            className="absolute top-4 left-4 bg-secondary p-5  w-10 h-10 flex items-center justify-center rounded-full shadow-md"
        >
            <LeftArrowIcon />
        </TouchableOpacity>
    )
}

export default BackButton