import Styles from "../components/styles";
import React from 'react';
import { TextInput } from 'react-native';

const TextInputComponent = (props) => {
  return (
    <TextInput style={Styles.input}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export default TextInputComponent;
