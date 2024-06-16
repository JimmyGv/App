import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import Styles from "../components/styles";

const Login = ({ navigation }) => {
  const {setIsLoggedIn} = useLoggin()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    // console.log('Login with:', username, password);
    navigation.navigate('Menu')
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.logoContainer}>
        <Avatar.Image size={200} source={require('../assets/logo-appescolar1.png')} />
      </View>
      <Text style={Styles.title}>Login</Text>
      <TextInput
        style={Styles.input}
        placeholder="Email"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={Styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={Styles.button} onPress={handleLogin}>
        <Text style={Styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={Styles.forgotPassword}>Forgot your password?</Text>
    </View>
  );
};


export default Login;