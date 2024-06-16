import React from 'react';
import { Picker } from '@react-native-picker/picker';
import Styles from '../components/styles';

const DropdownList = ({ options, onSelect, textInput }) => {
  return (
    <Picker
      selectedValue={textInput}
      onValueChange={(itemValue) => onSelect(itemValue)}
      style={Styles.dropdown_container}  // Aplicar estilos directamente a Picker
    >
      {options.map((option) => (
        <Picker.Item 
          label={option.label} 
          value={option.value} 
          key={option.value} 
          style={Styles.dropdown_item}  // Aplicar estilos a cada Picker.Item
        />
      ))}
    </Picker>
  );
};


export default DropdownList;




//import React from "react";
//import { SelectList } from "react-native-dropdown-select-list";
//import Styles from "../components/styles";
//const DropdownList = ({ options, onSelect, textInput }) => {
    //return (
        //<SelectList
          //data={options}
          //onSelect={onSelect}
          //setSelected={onSelect}
          //dropdownStyles={{backgroundColor:'gray'}}
          //dropdownItemStyles={{marginHorizontal:10}}
          //dropdownTextStyles={{color:'white', fontSize: 24}}
          //placeholder={textInput}
        //  maxHeight={350}
      //    boxStyles={Styles.dropdown_container}

    //    />
  //  );
//};

//export default DropdownList;

