import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Styles from './styles';

const ForgotPasswordComponent = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={Styles.forgotPassword}>Forgot your password?</Text>
    </TouchableOpacity>
  );
};

export default ForgotPasswordComponent;
