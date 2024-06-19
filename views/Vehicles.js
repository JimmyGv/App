import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import Styles from '../components/styles';
import TextInputComponent from '../components/TextInputs';
import ButtonComponent from '../components/button';
import client from '../src/Application/client';
import TextInputComponenttoOthers from '../components/OtherTextInput';

const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {
        stateUpdater('');
    }, 2500);
};

const VehicleScrn = ({ navigation }) => {
    const [vehicleInfo, setVehicleInfo] = useState({
        name: '',
        model: '',
        oilChange: '',
        sparkPlugChange: '',
        airFilterChange: '',
        tyreChange: '',
        bateryChange: '',
        breakChange: '',
        avatar:null,
    });

    const [pwrdSecret, setPwrdSecret] = useState('');
    const [error, setError] = useState('');
    const [allVehicles, setAllVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await client.get('/vehicles');
                const data = response.data;
                setAllVehicles(data);
            } catch (error) {
                console.error('Error fetching vehicles:', error);
                updateError('Failed to fetch vehicles. Please try again.', setError);
            }
        };

        fetchVehicles();
    }, []);

    const handleOnchangeText = (value, fieldName) => {
        setVehicleInfo({ ...vehicleInfo, [fieldName]: value });
    };

    const handleOnchangeText1 = (value) => {
        setPwrdSecret(value);
    };

    const handleBtn = async () => {
        if (!pwrdSecret) {
            updateError('Please enter password', setError);
            return;
        }
        
        if (pwrdSecret.trim() !== "Admin01James") {
            updateError('Invalid password', setError);
            return;
        }

        try {
            const res = await client.post('/vehicle/add', { ...vehicleInfo });

            if (res.data.success) {
                updateError('Vehicle added successfully', setError);
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
    };


    const handleSave = async () =>{
        if (!pwrdSecret) {
            updateError('Please enter password', setError);
            return;
        }
        
        if (pwrdSecret.trim() !== "Admin01James") {
            updateError('Invalid password', setError);
            return;
        }

        try {
            const res = await client.post('/') 
        } catch (error) {
            updateError('Someting went wrong ' + error.message, setError)
        }

    }

    return (
        <ScrollView contentContainerStyle={Styles.container}>
            <Text>Screen Create Vehicle</Text>
            {error ? <Text style={{ color: 'blue', fontSize: 14, textAlign: 'center' }}>{error}</Text> : null}

            
            <FlatList
                data={allVehicles}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={Styles.flatListItem}
                        onPress={() => {
                            setVehicleInfo({
                                ...vehicleInfo,
                                name: item.name,
                                model: item.model,
                                oilChange: item.oilChange,
                                sparkPlugChange: item.sparkPlugChange,
                                airFilterChange: item.airFilterChange,
                                tyreChange: item.tyreChange,
                                bateryChange: item.bateryChange,
                                breakChange: item.breakChange,
                            });
                        }}>
                        <Text style={Styles.flatListItemText}>{item.name} - {item.model}</Text>
                    </TouchableOpacity>
                )}
                contentContainerStyle={Styles.flatListContainer}
            />

            <TextInputComponent
                placeholder="Vehicle name"
                onChangeText={(value) => handleOnchangeText(value, 'name')}
                value={vehicleInfo.name}
            />
            <TextInputComponent
                placeholder="Vehicle model"
                onChangeText={(value) => handleOnchangeText(value, 'model')}
                value={vehicleInfo.model}
            />
            <TextInputComponenttoOthers
                placeholder="How to change the oil"
                multiline={true}
                onChangeText={(value) => handleOnchangeText(value, 'oilChange')}
                value={vehicleInfo.oilChange}
                numberOfLines={4}
            />
            <TextInputComponenttoOthers
                placeholder="How to change the spark Plug"
                multiline={true}
                onChangeText={(value) => handleOnchangeText(value, 'sparkPlugChange')}
                value={vehicleInfo.sparkPlugChange}
                numberOfLines={4}
            />
            <TextInputComponenttoOthers
                placeholder="How to change the air Filter"
                multiline={true}
                onChangeText={(value) => handleOnchangeText(value, 'airFilterChange')}
                value={vehicleInfo.airFilterChange}
                numberOfLines={4}
            />
            <TextInputComponenttoOthers
                placeholder="How to change a tyre"
                multiline={true}
                onChangeText={(value) => handleOnchangeText(value, 'tyreChange')}
                value={vehicleInfo.tyreChange}
                numberOfLines={4}
            />
            <TextInputComponenttoOthers
                placeholder="How to change the batery"
                multiline={true}
                onChangeText={(value) => handleOnchangeText(value, 'bateryChange')}
                value={vehicleInfo.bateryChange}
                numberOfLines={4}
            />
            <TextInputComponenttoOthers
                placeholder="How to change the breaks"
                multiline={true}
                onChangeText={(value) => handleOnchangeText(value, 'breakChange')}
                value={vehicleInfo.breakChange}
                numberOfLines={4}
            />
            <TextInputComponent
                placeholder="Type the admin password to create a vehicle"
                multiline={true}
                onChangeText={handleOnchangeText1}
                value={pwrdSecret}
                secureTextEntry
            />
            <ButtonComponent onPress={handleBtn} txtBtn={'Add Vehicle'} />
            <ButtonComponent onPress={handleSave} txtBtn={'Save changes'} />
        </ScrollView>
    );
};

export default VehicleScrn;
