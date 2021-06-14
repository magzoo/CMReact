import React from 'react';
import {  View,TouchableOpacity, Text } from 'react-native';
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
                <TouchableOpacity style={styles.button} onPress={() => {
                  if(selectedDay.dateString != "Selecione um dia"){
                    RootNavigation.navigate("AddEvent",{day: selectedDay})
                  }
                }}>
                    <Text style={styles.buttonTitle}>Adicionar Evento</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>Remover Evento</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>Editar Evento</Text>
                </TouchableOpacity>
            </View>
    );
};

export default Buttons;