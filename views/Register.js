import React from 'react';
import { View, Text, Alert } from 'react-native';
import Styles from '../components/styles';
import TextInputComponent from '../components/TextInputs';
import ButtonComponent from '../components/button';
import client from '../src/Application/client';

const updateError = ( error, stateUpdater)=>{
    stateUpdater(error);
    setTimeout(()=>{
        stateUpdater('')

    },2500)
}


const RegisterScreen = ({navigation}) => {
    const [userInfo, setUserInfo] = React.useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    });

    const [error, setError]=React.useState('')

    const {name, email,password, confirmPassword} = userInfo

    const handleOnchangeText = (value, fieldName) =>{
        setUserInfo({...userInfo, [fieldName]:value});
        //console.log(userInfo)
    }  

    const handleInput = async ()=>{
        try {
            const res = await client.post('/users/add', { ...userInfo });
            console.log(res.data.success);

            if (res.data.success ==true) {
                updateError("The user was created successfully", setError);
                setTimeout(() => {
                    navigation.navigate('Login');
                }, 2500); // Redirigir después de mostrar el mensaje de éxito
            } else {
                updateError(res.data.message, setError);
            }
        } catch (error) {
            console.error('An error occurred:', error);
            updateError('An unexpected error occurred. Please try again.', setError);
        }
    }

    return (
        <View style={Styles.container}>
            {error ? (<Text  style= {{color:'blue', fontSize:14, textAlign:'center'}} > {error}</Text>):null}
            <Text>View to Register User</Text>
            <TextInputComponent
                placeholder="User Name Address"
                onChangeText={(value)=> handleOnchangeText(value,'name')}
                value={name}
            />
            <TextInputComponent
                placeholder="Email Address"
                onChangeText={(value)=> handleOnchangeText(value,'email')}
                value={email}
            />
            <TextInputComponent
                placeholder="Password Address"
                onChangeText={(value)=> handleOnchangeText(value,'password')}
                value={password}
                secureTextEntry
            />
            <TextInputComponent
                placeholder="Confirm Password"
                onChangeText={(value)=> handleOnchangeText(value,'confirmPassword')}
                value={confirmPassword}
                secureTextEntry
            />
            <ButtonComponent onPress={handleInput} txtBtn={"Register me"}/>
        </View>
    );
};

export default RegisterScreen;