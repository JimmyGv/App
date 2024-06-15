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
    const [selectedOption, setSelectedOption] = useState(null);
    const [error, setError] = useState('');
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
          try {
            const response = await client.get('/vehicles');
            const data = response.data;
            const options = data.map((item) => ({
              label: item.name,
              value: item._id,
            }));
            setOptions(options);
          } catch (error) {
            console.error('Error fetching vehicles:', error);
            updateError(response.data.message,setError)
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
            {error ? <Text  style= {{color:'blue', fontSize:14, textAlign:'center'}}>{error}</Text>:null}
            <DropdownList options={options} onSelect={handleOptionSelect} textInput={"Select a Vehicle"}/>
        </View>
    );
};

export default HomeScreen;
