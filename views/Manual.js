import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Styles from '../components/styles';
import DropdownList from '../components/dropdownbox';
import client from '../src/Application/client';
import { ScrollView } from 'react-native-gesture-handler';

const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {
        stateUpdater('');
    }, 2500);
};

const ManualScreen = () => {

    const [selectedOption, setSelected] = useState('select something');
    const [selectedOption2, setSelected2] = useState('');
    const [options, setOptions] = useState([]);
    const [all, setAll] = useState([]);
    const [error, setError] = useState('');

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
                setAll(data);
            } catch (error) {
                console.error('Error fetching vehicles:', error);
                updateError('Failed to fetch vehicles. Please try again.', setError);
            }
        };

        fetchVehicles();
    }, []);

    const options2 = [
        666d8258f145148194b1c8a8
    ]

    const handleOptionSelect = (option) => {
        setSelected(option);
        console.log('Opción seleccionada:', option);
    };

    const handleOptionSelect2 = (option) => {
        setSelected2(option);
        console.log('Opción seleccionada:', option);
    };

    const getSelectedVehicleInfo = () => {
        if (!selectedOption || !selectedOption2) return null;

        const selectedVehicle = all.find(vehicle => vehicle._id === selectedOption);
        if (!selectedVehicle) return 'No data available';

        return selectedVehicle[selectedOption2];
    };

    return (
        <View style={Styles.container}>
            {error ? <Text style={{ color: 'red', fontSize: 14, textAlign: 'center' }}>{error}</Text> : null}
            <Text>Screen Manual</Text>
            <DropdownList options={options} onSelect={handleOptionSelect} textInput={selectedOption} />
            <DropdownList options={options2} onSelect={handleOptionSelect2} textInput={selectedOption2} />
            <ScrollView style={{marginStart:10,marginEnd:10, flexGrow:1}}>
                <Text>{getSelectedVehicleInfo()}</Text>
            </ScrollView>
        </View>
    );
};

export default ManualScreen;