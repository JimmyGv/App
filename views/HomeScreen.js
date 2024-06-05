import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropdownList from '../components/dropdownbox';
import Styles from '../components/styles';

const HomeScreen = () => {
    const [selectedOption, setSelected] = useState(null);

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
            <DropdownList options={options} onSelect={handleOptionSelect} textInput={"Seleccione uno de sus Vehiculos"}/>
        </View>
    );
};

export default HomeScreen;
