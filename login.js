import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Alert} from 'react-native';
import { app } from './firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = ({navigation}) => {
  //const [userEmail, setuserEmail] = useState(null)
    const auth = getAuth();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    function call(){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Alert.alert('Login Successful')
         // ...gmail.com
        })
         .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         Alert.alert(errorMessage)
        });
     }
    return (
        <View style={styles.container}>
          <View>
            <Text style= {styles.sign}>Log in</Text>
          </View>
          <TextInput placeholder='UserName/Email'
          style={styles.input}
          onChangeText={setemail}
          />
          <TextInput placeholder='Password'
          secureTextEntry={true}
          style={styles.input}
          onChangeText={setpassword}
          />
          <TouchableOpacity onPress={call}
          style={styles.button}
          >
            <Text style={{fontSize:20,fontWeight:'bold'}}>Login</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
          <Text>Do not have an Account,</Text>
          <TouchableOpacity 
          onPress={()=> navigation.navigate('Sign')}
          >
            <Text style={{color:'blue'}}>Create Account</Text>
          </TouchableOpacity>
          
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'cyan'
      },
      input:{
        borderColor:'blue',
        borderWidth:1,
        padding:10,
        alignSelf: "center",
        marginTop:20,
        width:300,
        height:40,
        borderRadius:30,
        backgroundColor:'white',
        
      },
      sign:{
        fontSize:40,
        fontWeight:'bold',
        
      },
      button:{
        padding:8,
        backgroundColor:'yellow',
        height:40,
        width:100,
        alignItems:'center',
        borderRadius:12,
        marginTop:30,
        marginBottom:30
      }
    });
    
export default Login;