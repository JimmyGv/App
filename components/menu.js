import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../views/HomeScreen';
import IndividualScreen from '../views/IndividualScreen';
import ManualScreen from '../views/Manual';
import AddVehicleScreen from '../views/AddVehicle';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Menu_inicio = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:({color,size}) =>(<MaterialCommunityIcons name="home" color={color} size={size} />),}} />
      <Tab.Screen name="Add Vehicle" component={AddVehicleScreen} options={{tabBarIcon:({color,size}) =>(<MaterialCommunityIcons name="car" color={color} size={size} />),}} />
      <Tab.Screen name="Changes & Reports" component={IndividualScreen} options={{tabBarIcon:({color,size}) =>(<MaterialCommunityIcons name="engine-outline" color={color} size={size} />),}} />
      <Tab.Screen name="Manual" component={ManualScreen} options={{tabBarIcon:({color,size}) =>(<MaterialCommunityIcons name="book-open-page-variant-outline" color={color} size={size} />),}} />
    </Tab.Navigator>
  );
};

export default Menu_inicio;