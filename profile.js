import { StyleSheet, Text,Alert, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { getAuth, signOut} from "firebase/auth";
const Profile = ({navigation,route}) => {
  
  const auth = getAuth()
  function handleOut(){
    signOut(auth).then(() => {
      Alert.alert('Signed Out Successfully')
    }).catch((error) => {
      Alert.alert('Something Went Wrong')
    });
  }
  return (
    <View>
      <Text style={{fontWeight:'bold',fontSize:40}}>This is {route.params.name}'s profile</Text>
      <TouchableOpacity 
      onPress={handleOut}
      >
        <Text style={{color:'blue',fontSize:30,marginTop:30}}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})