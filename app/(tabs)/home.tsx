import { View, Text } from 'react-native'
import React from 'react'
import useSession from '@/hooks/useSession'

const home = () => {
  const {isAuthenticated, userData} = useSession();
  return (
    <View>
      {isAuthenticated && <Text>{userData?.email}</Text>}
    </View>
  )
}

export default home