import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';
import styles from "./styles";
const AvatarComponent = () => {
    return (
      <View style={styles.logoContainer}>
        <Avatar.Image size={200} source={require('../assets/logo.png')} />
      </View>
    );
  };
  
  export default AvatarComponent;