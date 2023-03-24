import { View, Text,Button } from 'react-native'
import React from 'react'
import { userEmail } from './handleboth'
const Home = ({navigation}) => {
  return (
    <View>
       <Button
      title="Go to profile"
      onPress={() =>
        navigation.navigate('Profile', { name:userEmail  })
      }
    />
    </View>
   
  )
}

export default Home
