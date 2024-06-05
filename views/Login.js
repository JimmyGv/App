import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import LoginCampo1 from "../components/LoginCampo1";
const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    // console.log('Login with:', username, password);
    navigation.navigate('Menu')
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Avatar.Image size={200} source={require('../assets/logo-appescolar1.png')} />
      </View>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0', // Ajusta este color al de tu fondo
  },
  logoContainer: {
    backgroundColor: '#FFFFFF', // Ajusta este color al de tu logo
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 50,
    color: '#0000FF', // Ajusta este color al de tu logo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '80%',
    margin: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#0000FF', // Ajusta este color al del botón en la imagen
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
    color: '#0000FF', // Ajusta este color al de tu enlace
  },
});

export default Login;