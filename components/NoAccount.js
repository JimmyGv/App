import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from '../components/styles';

const NoAccountComponent = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={Styles.forgotPassword}>You have no Account? </Text>
    </TouchableOpacity>
  );
};

export default NoAccountComponent;
