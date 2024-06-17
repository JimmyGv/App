import React, { useState } from 'react';
import { View, Text } from 'react-native';
import AvatarComponent from '../components/image';
import ButtonComponent from '../components/button';
import TextInputComponent from '../components/TextInputs';
import ForgotPasswordComponent from '../components/ForgotPassword';
import NoAccountComponent from '../components/NoAccount';
import Styles from '../components/styles';
import client from '../src/Application/client';
import { useLoggin } from '../src/uses-cases/SendEmail';

const updateError = ( error, stateUpdater)=>{
  stateUpdater(error);
  setTimeout(()=>{
      stateUpdater('')

  },2500)
}


const LoginScreen = ({navigation}) => {
    const {setIsLoggedIn, setProfile} = useLoggin()
    const [userInfo, setUserInfo] = useState({
      email:'',
      password:''
    })
  
    const{email, password} = userInfo;

    const [error, setError]=React.useState('')

    const handleOnchangeText = (value, fieldName) =>{
      setUserInfo({...userInfo, [fieldName]:value})
      //console.log(value)
      //console.log(userInfo)
    }

    const handleLogin = async() => {
      console.log(userInfo)
      const res = await client.post('/users/sign-in',{
        ...userInfo
      })
      console.log(res)
      if(res.data.success == false){
        updateError(res.data.message, setError);
      }else{
        setIsLoggedIn(true)
        setProfile(res.data.user)
        console.log(res.data.user)
        //navigation.navigate('Menu')
      }
        
    };

    const handleAccount = () => {
      navigation.navigate('Register')
    };

  
    return (
      <View style={Styles.container}>
        <AvatarComponent /> 
        <Text style={Styles.title}>Login</Text>
        {error ? <Text  style= {{color:'blue', fontSize:14, textAlign:'center'}}>{error}</Text>:null}
        <TextInputComponent
          placeholder="Email"
          onChangeText={(value)=> handleOnchangeText(value,'email')}
          value={email}
        />
        <TextInputComponent
          placeholder="Password"
          onChangeText={(value)=> handleOnchangeText(value,'password')}
          value={password}
          secureTextEntry
        />
        <ButtonComponent onPress={handleLogin} txtBtn={"Login"}/>
        <ForgotPasswordComponent/>
        <NoAccountComponent onPress={handleAccount}/>
      </View>
    );
  };
  
  export default LoginScreen;