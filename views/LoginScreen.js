import React, { useState } from 'react';
import { View, Text } from 'react-native';
import AvatarComponent from '../components/image';
import ButtonComponent from '../components/button';
import TextInputComponent from '../components/TextInputs';
import ForgotPasswordComponent from '../components/ForgotPassword';
import NoAccountComponent from '../components/NoAccount';

import Styles from '../components/styles';

const LoginScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
        navigation.navigate('Menu')
    };

    const handleAccount = () => {
      navigation.navigate('Register')
  };
  
    return (
      <View style={Styles.container}>
        <AvatarComponent /> 
        <Text style={Styles.title}>Login</Text>
        <TextInputComponent
          placeholder="Email"
          onChangeText={setUsername}
          value={username}
        />
        <TextInputComponent
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <ButtonComponent onPress={handleLogin} txtBtn={"Login"}/>
        <ForgotPasswordComponent />
        <NoAccountComponent onPress={handleAccount}/>
      </View>
    );
  };
  
  export default LoginScreen;