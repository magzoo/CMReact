import React from 'react';
import {  View,TouchableOpacity, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as RootNavigation from '../../Navigation/RootNavigation'

import styles from './Styles'
import AddingEvent from '../../screens/AddEvent';


const AddEvent = () => {
    return(
        <AddingEvent/>
    )
}

const Buttons = (props) => {
  const selectedDay = props.day;
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.buttonViewLeft}>
                <Button title="Adicionar Evento" onPress={()=>{ 
                    if(selectedDay.dateString != "Selecione um dia"){
                        RootNavigation.navigate("AddEvent",{day: selectedDay, schedule:props.schedule})
                    }
                }}/>
            </View>
            <View style={styles.buttonView}>
                <Button title="Remover Calendário" onPress={()=>{ RootNavigation.navigate("RemoveSchedule")}}/>
            </View>
            <View style={styles.buttonViewRight}>
                <Button title="Editar Calendário" onPress={()=>{ RootNavigation.navigate("EditSchedule")}}/>
            </View>
        </View>
    );
};

export default Buttons;