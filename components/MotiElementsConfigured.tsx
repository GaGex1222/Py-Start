import { View, Text } from 'react-native'
import React from 'react'
import { MotiView, MotiText } from 'moti'
import { MotiElementProps } from '@/element-types'

export const MotiTextConfigured: React.FC<MotiElementProps> = ({className, children, animationDelay}) => {
  return (
    <MotiText 
        from={{ opacity: 0, translateY: 10 }} 
        animate={{ opacity: 1, translateY: 0 }} 
        transition={{ type: "spring", delay: animationDelay }}
        className={className}
    >
        {children}
    </MotiText>
  )
}

export const MotiViewConfigured: React.FC<MotiElementProps> = ({className, children, animationDelay}) => {
  return (
    <MotiView 
        from={{ opacity: 0, translateY: 10, scale: 0.95 }} 
        animate={{ opacity: 1, translateY: 0, scale: 1 }} 
        transition={{ type: "spring", delay: animationDelay }}
        className={className}
    >
        {children}
    </MotiView>
  )
}
