import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../views/LoginScreen';
import Menu from '../components/menu';
import RegisterScreen from '../views/Register';

const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
};
export default AppNavigator;