import Styles from "../components/styles";
import React from 'react';
import { TextInput } from 'react-native';

const TextInputComponenttoOthers = (props) => {
  return (
    <TextInput style={Styles.inputToOthers}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export default TextInputComponenttoOthers;