import React, {useState} from "react";
import {View, Text} from "react-native";
import {Picker} from '@react-native-picker/picker';

import styles from './Styles'


const SchedulePicker= () =>{
    const [ pickerValue, setPickerValue ] = useState("JavaScript");
    return ( 
        <View style={styles.container}>
            <Picker style={styles.picker}
            selectedValue={pickerValue}
            onValueChange={ (itemValue) => setPickerValue(itemValue)}>
                <Picker.Item label="JavaScript" value="JavaScript"/>
                <Picker.Item label="Java" value="Java"/>
                <Picker.Item label="C#" value="C#"/>
            </Picker>
        </View>
    );
};


export default SchedulePicker;