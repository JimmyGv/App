import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import Styles from '../components/styles';
import TextInputComponent from '../components/TextInputs';
import ButtonComponent from '../components/button';
import client from '../src/Application/client';
import TextInputComponenttoOthers from '../components/OtherTextInput';

const updateError = ( error, stateUpdater)=>{
    stateUpdater(error);
    setTimeout(()=>{
        stateUpdater('')

    },2500)
}

const VehicleScrn = ({navigation}) => {
    const [vehicleInfo, setVehicleInfo] = React.useState({
        name:'',
        model:'',
        oilChange:'',
        sparkPlugChange:'',
        airFilterChange:'',
        tyreChange:'',
        bateryChange:'',
        breakChange:'',
    });

    const [pwrdSecret,setPwrdSecret]=React.useState('')
    const {name, model, oilChange, sparkPlugChange, airFilterChange, tyreChange, bateryChange, breakChange} = vehicleInfo;
    const [error, setError] = React.useState('');

    const handleOnchangeText = (value, fieldName) =>{
        setVehicleInfo({...vehicleInfo, [fieldName]:value})
        //console.log(value)
        //console.log(vehicleInfo)
      }

    const handleOnchangeText1 = (value) => {
        setPwrdSecret(value);
        //console.log(value)
    };

    const handleBtn = async () => {
        if(!pwrdSecret){
            updateError('Please enter password', setError)
        }
        if (pwrdSecret.trim() !== "Admin01James") {
            return updateError('Invalid password', setError);
        }

        try {
            const res = await client.post('/vehicle/add', { ...vehicleInfo });

            if (res.data.success) {
                updateError('Vehicle added successfully', setError)
                setTimeout(() => {
                    navigation.navigate('Home');
                }, 2500);
            } else {
                updateError(res.data.message, setError);
            }
        } catch (error) {
            console.error('Error adding vehicle:', error);
            updateError('Something went wrong. Please try again.', setError);
        }
    }

    return (
        <ScrollView contentContainerStyle={Styles.container}>
            <Text>Screen Create Vehicle</Text>
            {error ? <Text  style= {{color:'blue', fontSize:14, textAlign:'center'}}>{error}</Text>:null}
            <TextInputComponent
                placeholder="Vehicle name"
                onChangeText={(value)=> handleOnchangeText(value,'name')}
                value={name}
            />
            <TextInputComponent
                placeholder="Vehicle model"
                onChangeText={(value)=> handleOnchangeText(value,'model')}
                value={model}
            />
            <TextInputComponenttoOthers
                placeholder="How to change the oil"
                multiline={true}
                onChangeText={(value)=> handleOnchangeText(value,'oilChange')}
                value={oilChange}
                numberOfLines={4}
            />
            <TextInputComponenttoOthers
                placeholder="How to change the spark Plug"
                multiline={true}
                onChangeText={(value)=> handleOnchangeText(value,'sparkPlugChange')}
                value={sparkPlugChange}
                numberOfLines={4}
            />

            <TextInputComponenttoOthers
                placeholder="How to change the air Filter"
                multiline={true}
                onChangeText={(value)=> handleOnchangeText(value,'airFilterChange')}
                value={airFilterChange}
                numberOfLines={4}
            />

            <TextInputComponenttoOthers
                placeholder="How to change a tyre"
                multiline={true}
                onChangeText={(value)=> handleOnchangeText(value,'tyreChange')}
                value={tyreChange}
                numberOfLines={4}
            />

            <TextInputComponenttoOthers
                placeholder="How to change the batery"
                multiline={true}
                onChangeText={(value)=> handleOnchangeText(value,'bateryChange')}
                value={bateryChange}
                numberOfLines={4}
            />
            
            <TextInputComponenttoOthers
                placeholder="How to change the breaks"
                multiline={true}
                onChangeText={(value)=> handleOnchangeText(value,'breakChange')}
                value={breakChange}
                numberOfLines={4}
            />

            <TextInputComponent
                placeholder="Type the admin password to create a vehicle"
                multiline={true}
                onChangeText={handleOnchangeText1}
                value={pwrdSecret}
                secureTextEntry
            />
            <ButtonComponent onPress={handleBtn} txtBtn={'Add Vehicle'}/>
        </ScrollView>
    );
};

export default VehicleScrn;