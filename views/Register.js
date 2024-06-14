import React from 'react';
import { View, Text, Alert } from 'react-native';
import axios from 'axios';
import Styles from '../components/styles';
import TextInputComponent from '../components/TextInputs';
import ButtonComponent from '../components/button';
import client from '../src/Application/client';

const isValidObjField = (obj)=>{
    return Object.values(obj).every(value => value.trim())
}

const updateError = ( error, stateUpdater)=>{
    stateUpdater(error);
    setTimeout(()=>{
        stateUpdater('')

    },2500)
}

const isValidEmail = (value)=>{
    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regx.test(value)
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
        console.log(userInfo)
    }

    const isValidForm =()=>{
        if(!isValidObjField(userInfo)) return updateError('Required all fields', setError);
        
        if(!name.trim()|| name.length <3) return updateError('Invalid name', setError);

        if(!isValidEmail(email)) return updateError('Invalid email', setError);
        
        if(!password.trim() || password.length < 8) return updateError('Invalid password must be 8 characters', setError);

        if(password !== confirmPassword) return updateError('The passwords does not match', setError);

        return true
    }   

    const handleInput = ()=>{
        if(isValidForm){
            console.log(userInfo)
        }
    }

    return (
        <View style={Styles.container}>
            {error ? (<Text  style= {{color:'red', fontSize:14, textAlign:'center'}} > {error}</Text>):null}
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