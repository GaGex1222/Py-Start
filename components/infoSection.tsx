import { View, Text } from 'react-native'
import React from 'react'
import { SvgUri } from 'react-native-svg'
import { MotiViewConfigured } from './MotiElementsConfigured'
import { InfoSectionProps } from '@/element-types'
const InfoSection: React.FC<InfoSectionProps> = ({text, animationDelay}) => {
    return (
      <MotiViewConfigured
      animationDelay={animationDelay}
      className="w-4/5 bg-secondary flex-row items-center justify-start shadow-lg rounded-lg p-4 mt-6"
      >
          <SvgUri uri="https://www.svgrepo.com/show/501130/check-mark.svg" width={24} height={24} style={{marginRight: 12}} fill="#3776AB"/>
          <Text className="text-primary font-pbold text-lg">
              {text}
          </Text>
      </MotiViewConfigured>
    )
  }
export default InfoSection