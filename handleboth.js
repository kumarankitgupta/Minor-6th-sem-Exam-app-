import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { LogoutScreen,LoginScreen } from './screen'
import { getAuth, onAuthStateChanged } from "firebase/auth";
var userEmail;
const Handle = () => {
const auth  = getAuth();
const [currentuser, setcurrentuser] = useState(null)
function handleuser(user){
    user ? setcurrentuser(user):setcurrentuser(null);
}
useEffect(() => 
onAuthStateChanged(auth, (user) => handleuser(user))
,[])

  const a = false;
  if(currentuser){
      userEmail = currentuser.email;
      return(<LoginScreen/>)
  }else{
    return(<LogoutScreen/>)
  }
}

export default Handle
export {userEmail};
const styles = StyleSheet.create({})