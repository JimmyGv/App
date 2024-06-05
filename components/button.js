import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from '../components/styles';

const ButtonComponent = ({ onPress, txtBtn }) => {
  return (
    <TouchableOpacity style={Styles.button} onPress={onPress}>
      <Text style={Styles.buttonText}> {txtBtn} </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;