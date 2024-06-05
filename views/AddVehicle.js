import React from 'react';
import { View, Text } from 'react-native';
import DropdownList from '../components/dropdownbox';
import Styles from '../components/styles';
import TextInputComponent from '../components/TextInputs';
import ButtonComponent from '../components/button';

const AddVehicleScreen = ({navigation}) => {
    const [selectedOption, setSelected] = React.useState(null);
    const [vehiclename, setVehicleName] = React.useState(null);

    const handleBtn = () => {
        navigation.navigate('Home')
    }

    const options1 = [
        { key:'1', value: 'Mercedes' },
        { key:'2', value:'Range Rover' },
        { key:'3', value:'Mazda 3'},
        { key:'4', value: 'Honda Civic'}
    ];

    const handleOptionsSelect = (option) => {
        setSelected(option);
        console.log('Opción seleccionada:', option);
        // Realiza cualquier acción adicional según sea necesario
    };

    return (
        <View style={Styles.container}>
            <Text>Screen AddVehicleScreen</Text>
            <DropdownList options={options1} onSelect={handleOptionsSelect} textInput={"Seleccione un vehiculo Disponible"}/>
            <TextInputComponent
                placeholder="Nombre Alias"
                onChangeText={setVehicleName}
                value={vehiclename}
            />
            <ButtonComponent onPress={handleBtn} txtBtn={'Add Vehicle'}/>
        </View>
    );
};

export default AddVehicleScreen;
