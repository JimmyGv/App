import React, { useEffect } from 'react';
import AppNavigator from './components/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import LogginProvider from './src/uses-cases/SendEmail';

export default function App() {

  const fetchApi = async()=>{

    try {
      const res = await axios.get('http://192.168.0.36:3000/')
      console.log(res.data)
      
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(()=>{
    fetchApi()

  },[])

  return (
    <LogginProvider>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </LogginProvider>
  );
}
