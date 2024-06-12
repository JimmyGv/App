import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Styles from '../components/styles';
import DropdownList from '../components/dropdownbox';

const ManualScreen = () => {

    const [selectedOption, setSelected] = useState(null);
    const [selectedOption2, setSelected2] = useState(null);

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


    const options2 = [
        { key:'1', value: 'Cambio de aceite' },
        { key:'2', value:'Cambio de bujias' },
        { key:'3', value:'Cambio de llantas'},
        { key:'4', value: 'Cambio de bateria' },
        { key:'5', value:'Cambio de frenos' },
        { key:'6', value:'Cambio del filtro de aire'},
        { key:'7', value: 'Cambio del liquido de frenos' },
        { key:'8', value:'Alineacion y balanceo' },
        { key:'9', value:'Cambio de la banda de tiempo'},
        { key:'10', value:'Cambio de liquido de transmision'},
    ]

    const handleOptionSelect2 = (option1) => {
        setSelected2(option1);
        console.log('Opción seleccionada:', option1);
        // Realiza cualquier acción adicional según sea necesario
    };

    return (
        <View style={Styles.container}>
            <Text>Screen Manual</Text>
            <DropdownList options={options} onSelect={handleOptionSelect} textInput={"Seleccione uno de sus Vehiculos"}/>
            <DropdownList options={options2} onSelect={handleOptionSelect2} textInput={"Seleccione uno de los servicios"}/>
            <View style={Styles.buttonContainerCamera}>
                <Text style={Styles.title}>Try</Text>
            </View>
        </View>
    );
};

export default ManualScreen;