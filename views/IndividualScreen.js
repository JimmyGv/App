import React from 'react';
import { View, Text } from 'react-native';
import DropdownList from '../components/dropdownbox';
import Styles from '../components/styles';

const IndividualScreen = () => {
    const [selectedOption, setSelected] = React.useState(null);

    const options2 = [
        { key:'1', value: 'Cambio de aceite' },
        { key:'2', value:'Lenado de Gasolina' },
        { key:'3', value:'Cambio de clutch'},
        { key:'4', value:'Cambio de bateria'},
        { key:'5', value:'Cambio de bujias'}
    ];

    const handleOptionSelect2 = (option) => {
        setSelected(option);
        console.log('Opción seleccionada:', option);
        // Realiza cualquier acción adicional según sea necesario
    };

    return (
        <View style={Styles.container}>
            <Text>Screen Changes</Text>
            <DropdownList options={options2} onSelect={handleOptionSelect2} textInput={"Seleccione una opcion"}/>
        </View>
    );
};

export default IndividualScreen;
