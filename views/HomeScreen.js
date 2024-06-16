import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import DropdownList from '../components/dropdownbox';
import Styles from '../components/styles';
import client from '../src/Application/client';
import { useLoggin } from '../src/uses-cases/SendEmail';
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from '../components/button';
const updateError = ( error, stateUpdater)=>{
    stateUpdater(error);
    setTimeout(()=>{
        stateUpdater('')

    },2500)
}

const HomeScreen = () => {
    const {setIsLoggedIn, profile} =useLoggin();
    const [selectedOption, setSelectedOption] = useState('');
    const [error, setError] = useState('');
    const [options, setOptions] = useState([]);
    
    useEffect(() => {
        const fetchVehicles = async () => {
          try {
            const response = await client.get('/vehicles');
            const data = response.data;
            const options = data.map((item) => ({
              value: item._id,
              label: item.name
            }));
            setOptions(options);
          } catch (error) {
            console.error('Error fetching vehicles:', error);
            updateError('Failed to fetch vehicles. Please try again.', setError);
          }
        };
    
        fetchVehicles();
      }, []);
    
      const handleOptionSelect = (option) => {
        setSelectedOption(option);
        console.log('Opción seleccionada:', option);
        // Realiza cualquier acción adicional según sea necesario
      };

    return (
        <View style={Styles.container}>
            <Text style={{ textAlign:'center',fontSize:14}}>Welcome {profile.name}</Text>
            <Text style={Styles.title}>Select a Vehicle</Text>
            {error ? <Text  style= {{color:'blue', fontSize:14, textAlign:'center'}}>{error}</Text>:null}
            <DropdownList options={options} onSelect={handleOptionSelect} textInput={selectedOption}/>
            <ButtonComponent onPress={()=>setIsLoggedIn(false)} txtBtn={'Log Out'}/>
        </View>
    );
};
//<ButtonComponent onPress={setIsLoggedIn(false)} txtButton={'Log Out'}/>
export default HomeScreen;
