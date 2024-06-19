import React, {useEffect, useState } from 'react';
import { ScrollView, Text, } from 'react-native';
import DropdownList from '../components/dropdownbox';
import Styles from '../components/styles';
import TextInputComponent from '../components/TextInputs';
import ButtonComponent from '../components/button';
import client from '../src/Application/client';

const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {
        stateUpdater('');
    }, 2500);
};

const AddVehicleScreen = () => {
    const [selectedOption, setSelected] = React.useState('');
    const [vehiclename, setVehicleName] = React.useState(null);

    const handleBtn = () => {
        //navigation.navigate('Home')
    }

    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await client.get('/vehicles');
                const data = response.data;
                const options = data.map((item) => ({
                    value: item._id,
                    label: `${item.name} - ${item.model}`
                }));
                setOptions(options);
            } catch (error) {
                console.error('Error fetching vehicles:', error);
                updateError('Failed to fetch vehicles. Please try again.', setError);
            }
        };

        fetchVehicles();
    }, []);

    const handleOptionsSelect = (option) => {
        setSelected(option);
        console.log('Opción seleccionada:', option);
        // Realiza cualquier acción adicional según sea necesario
    };

    return (
        <ScrollView contentContainerStyle={Styles.container}>
            <Text>Screen AddVehicleScreen</Text>
            <DropdownList options={options} onSelect={handleOptionsSelect} textInput={selectedOption}/>
            <TextInputComponent
                placeholder="Nombre Alias"
                onChangeText={setVehicleName}
                value={vehiclename}
            />
            <ButtonComponent onPress={handleBtn} txtBtn={'Add Vehicle'}/>
        </ScrollView>
    );
};

export default AddVehicleScreen;
