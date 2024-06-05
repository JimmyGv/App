import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
import Styles from "../components/styles";
const DropdownList = ({ options, onSelect, textInput }) => {
    return (
        <SelectList
          data={options}
          onSelect={onSelect}
          setSelected={onSelect}
          dropdownStyles={{backgroundColor:'gray'}}
          dropdownItemStyles={{marginHorizontal:10}}
          dropdownTextStyles={{color:'white', fontSize: 24}}
          placeholder={textInput}
          maxHeight={350}
          boxStyles={Styles.dropdown_container}

        />
    );
};

export default DropdownList;

