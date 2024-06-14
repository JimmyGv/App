import React, { useState } from 'react';
import { View, Text } from 'react-native';
import AvatarComponent from '../components/image';
import ButtonComponent from '../components/button';
import TextInputComponent from '../components/TextInputs';
import ForgotPasswordComponent from '../components/ForgotPassword';
import NoAccountComponent from '../components/NoAccount';
import axios from 'axios';
import Styles from '../components/styles';
import client from '../src/Application/client';

const isValidObjField = (obj)=>{
  return Object.values(obj).every(value => value.trim())
}

const updateError = ( error, stateUpdater)=>{
  stateUpdater(error);
  setTimeout(()=>{
      stateUpdater('')

  },2500)
}

const isValidEmail = (value)=>{
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2-4})$/;
  return regx.test(value)
}

const LoginScreen = ({navigation}) => {
    const [userInfo, setUserInfo] = useState({
      email:'',
      password:''
    })
  
    const{email, password} = userInfo;

    const [error, setError]=React.useState('')

    const handleOnchangeText = (value, fieldName) =>{
      setUserInfo({...userInfo, [fieldName]:value})
      console.log(value)
      console.log(userInfo)
    }

    const isValidForm = () =>{
      if(!isValidObjField(userInfo)) return updateError('Required all fields', setError)

      if(!isValidEmail(email)) return updateError('Invalid email', setError)

      if(!password.trim() || password.length <8) return updateError('Invalid password must be 8 characters', setError)
    }

    const handleLogin = async(userInfo) => {
      if(isValidForm){
        console.log(userInfo)
        const res = await client.post('/users/sign-in',{
          ...userInfo
        })
        console.log(res)
      }
        //navigation.navigate('Menu')
    };

    const handleAccount = () => {
      navigation.navigate('Register')
    };

    const handleForgot = () =>{
      navigation.navigate('Menu')
    }
  
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
        <ForgotPasswordComponent onPress={handleForgot} />
        <NoAccountComponent onPress={handleAccount}/>
      </View>
    );
  };
  
  export default LoginScreen;