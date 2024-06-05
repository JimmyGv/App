import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../components/styles';
import TextInputComponent from '../components/TextInputs';
import ButtonComponent from '../components/button';

const RegisterScreen = ({navigation}) => {
    const [userEmail, setEmail] = React.useState('');
    const [passwordAdd, setPasswordAdd] = React.useState('');
    const [passwordAddConfirm, setPasswordAddConfirm] = React.useState('');
    const [userUserName, setUserName] = React.useState('');

    const handleInput = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={Styles.container}>
            <Text>View to Register User</Text>
            <TextInputComponent
                placeholder="User Name Address"
                onChangeText={setUserName}
                value={userUserName}
            />
            <TextInputComponent
                placeholder="Email Address"
                onChangeText={setEmail}
                value={userEmail}
            />
            <TextInputComponent
                placeholder="Password Address"
                onChangeText={setPasswordAdd}
                value={passwordAdd}
                secureTextEntry
            />
            <TextInputComponent
                placeholder="Confirm Password"
                onChangeText={setPasswordAddConfirm}
                value={passwordAddConfirm}
                secureTextEntry
            />
            <ButtonComponent onPress={handleInput} txtBtn={"Register me"}/>
        </View>
    );
};

export default RegisterScreen;