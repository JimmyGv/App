import React from 'react';
import { View, Text } from 'react-native';
import DropdownList from '../components/dropdownbox';
import Styles from '../components/styles';
import TextInputComponent from '../components/TextInputs';
import moment from 'moment';
import ButtonComponent from '../components/button';

const IndividualScreen = () => {
    const [selectedOption, setSelected] = React.useState(null);
    const [dateChange, setDateChange] = React.useState('');
    const options2 = [
        { value:'oilChange', label: 'Cambio de aceite' },
        { value:'sparkPlugChange', label:'Cambio de bujias' },
        { value:'airFilterChange', label:'Cambio de llantas'},
        { value:'tyreChange', label: 'Cambio de bateria' },
        { value:'bateryChange', label:'Cambio de frenos' },
        { value:'breakChange', label:'Cambio del filtro de aire'},
    ];

    const handleOptionSelect2 = (option) => {
        setSelected(option);
        console.log('Opción seleccionada:', option);
        // Realiza cualquier acción adicional según sea necesario
    };

    const handleEnter = () =>{
        //console.log('Presionó Enter');
    } 

    const handleOnchangeText = (value, field) => {
        if (field === 'dateChange') {
          const formattedDate = moment(value, 'MM-DD-YYYY', true).isValid()
            ? moment(value).format('MM-DD-YYYY')
            : value; // Formatea solo si es válido
          setDateChange(formattedDate);
        }
      };

    return (
        <View style={Styles.container}>
            <Text>Screen Changes</Text>
            <DropdownList options={options2} onSelect={handleOptionSelect2} textInput={selectedOption}/>
            <TextInputComponent
                placeholder="Date of change"
                onChangeText={(value) => handleOnchangeText(value, 'dateChange')}
                value={dateChange}
                keyboardType="numeric"
            />
            <TextInputComponent
                placeholder="Cost of change"
                onChangeText={(value) => handleOnchangeText(value, 'dateChange')}
                value={dateChange}
                keyboardType="numeric"
            />
            <ButtonComponent onPress={handleEnter} txtBtn={'Add change'}/>
            
        </View>
    );
};

export default IndividualScreen;
