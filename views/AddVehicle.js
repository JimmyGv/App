import React from 'react';
import { ScrollView, Text } from 'react-native';
import DropdownList from '../components/dropdownbox';
import Styles from '../components/styles';
import TextInputComponent from '../components/TextInputs';
import ButtonComponent from '../components/button';
import CameraComponent from '../components/Camera';

const AddVehicleScreen = ({navigation}) => {
    const [selectedOption, setSelected] = React.useState(null);
    const [vehiclename, setVehicleName] = React.useState(null);

    const handleBtn = () => {
        navigation.navigate('Home')
    }

    const options1 = [
        { value:'1', label: 'Mercedes' },
        { value:'2', label:'Range Rover' },
        { value:'3', label:'Mazda 3'},
        { value:'4', label: 'Honda Civic'}
    ];

    const handleOptionsSelect = (option) => {
        setSelected(option);
        console.log('Opción seleccionada:', option);
        // Realiza cualquier acción adicional según sea necesario
    };

    return (
        <ScrollView style={{flexGrow:1,alignSelf:'center'}}>
            <Text>Screen AddVehicleScreen</Text>
            <DropdownList options={options1} onSelect={handleOptionsSelect} textInput={"Seleccione un vehiculo Disponible"}/>
            <TextInputComponent
                placeholder="Nombre Alias"
                onChangeText={setVehicleName}
                value={vehiclename}
            />
            <CameraComponent/>
            <ButtonComponent onPress={handleBtn} txtBtn={'Add Vehicle'}/>
        </ScrollView>
    );
};

export default AddVehicleScreen;
