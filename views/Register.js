import React from 'react';
import { View, Text, Alert } from 'react-native';
import axios from 'axios';
import Styles from '../components/styles';
import TextInputComponent from '../components/TextInputs';
import ButtonComponent from '../components/button';

const RegisterScreen = ({navigation}) => {
    const [userEmail, setEmail] = React.useState('');
    const [passwordAdd, setPasswordAdd] = React.useState('');
    const [passwordAddConfirm, setPasswordAddConfirm] = React.useState('');
    const [userUserName, setUserName] = React.useState('');

    const handleInput = async () => {
        if (passwordAdd !== passwordAddConfirm) {
            Alert.alert("Error", "Las contraseñas no coinciden");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/users/register', {
                name: userUserName,
                mail: userEmail,
                password: passwordAdd
            });

            if (response.status === 200) {
                Alert.alert("Éxito", "Usuario registrado con éxito");
                // Aquí puedes redirigir al usuario a la pantalla de inicio de sesión si lo deseas
                navigation.navigate('Login');
            } else {
                Alert.alert("Error", "Hubo un problema al registrar el usuario");
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Hubo un problema al registrar el usuario");
        }
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