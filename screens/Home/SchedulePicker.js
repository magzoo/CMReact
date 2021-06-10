import React, {useState} from "react";
import {View, Text} from "react-native";
import {Picker} from '@react-native-picker/picker';

import styles from './Styles'


const SchedulePicker= () =>{
    state = {selected: "Geral"};
    var types = ["Geral","Trabalho","Familia","Amigos"];
    return ( 
        <View style={styles.container}>
            <Picker style={styles.picker}
            selectedValue={this.state.selected}
            onValueChange={() => {}}>
                {types.map((item,index) => {
                    return (
                        <Picker.Item label={item} value={index}/>
                    )
                })}
            </Picker>
        </View>
    );
};


export default SchedulePicker;