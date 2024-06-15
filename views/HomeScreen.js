import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropdownList from '../components/dropdownbox';
import Styles from '../components/styles';
import client from '../src/Application/client';

const updateError = ( error, stateUpdater)=>{
    stateUpdater(error);
    setTimeout(()=>{
        stateUpdater('')

    },2500)
}

const HomeScreen = () => {
    const [selectedOption, setSelected] = useState(null);
    const [error, setError] = useState('');

    const hndleList = async () =>{
        try{
            const response = await client.get('/vehicles');
            const data = response.data;
            const options = data.map((item)=>{
                return {label: item.name, value: item._id}
            })
                setSelected(options)
        }catch(error){
            updateError(error.message, setError)
        }
    }
    const options = [
        { key:'1', value: 'Mercedes' },
        { key:'2', value:'Range Rover' },
        { key:'3', value:'Mazda 3'},
    ];

    const handleOptionSelect = (option) => {
        setSelected(option);
        console.log('Opción seleccionada:', option);
        // Realiza cualquier acción adicional según sea necesario
    };

    return (
        <View style={Styles.container}>
            <Text>Welcome to HomeScreen</Text>
            <DropdownList options={options} onSelect={handleOptionSelect} textInput={"Select a Vehicle"}/>
        </View>
    );
};

export default HomeScreen;
