import React from 'react';
import { View, Text } from 'react-native';
import DropdownList from '../components/dropdownbox';
import Styles from '../components/styles';

const IndividualScreen = () => {
    const [selectedOption, setSelected] = React.useState(null);

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

    const handleOnchangeText = ()=>{
        //console.log('Cambio de texto');
    }

    return (
        <View style={Styles.container}>
            <Text>Screen Changes</Text>
            <DropdownList options={options2} onSelect={handleOptionSelect2} textInput={selectedOption}/>
            <TextInputComponent
                placeholder="Change date"
                onChangeText={(value)=> handleOnchangeText(value,'dateChange')}
                value={dateChange}
            />
            <ButtonComponent onPress={handleEnter} txtBtn={'Add change'}/>
        </View>
    );
};

export default IndividualScreen;
