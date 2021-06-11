import React from 'react';
import {  View,TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './Styles'
import AddingEvent from './AddEvent';


const AddEvent = () => {
    return(
        <AddingEvent/>
    )
}

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AddEvent" component={AddEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Buttons = ({navigation}) => {
    return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddEvent')}>
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