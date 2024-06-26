import React from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';
import Styles from './styles';

const ForgotPasswordComponent = () => {
  const handleOpenGmail = () => {
    const recipient = "tmp_jgonzalez@accitesz.com";
    const subject = "Recovery password";
    const body = "Hello I'd like to recovery my password\n\n" +
      "My email to enter the app is this one\n\n" +
      "Could you please help me with a temporal password?";
    
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoUrl);
  };
  return (
    <TouchableOpacity onPress={handleOpenGmail}>
      <Text style={Styles.forgotPassword}>Forgot your password?</Text>
    </TouchableOpacity>
  );
};

export default ForgotPasswordComponent;
