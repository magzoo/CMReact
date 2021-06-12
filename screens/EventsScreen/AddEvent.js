import React, {useState} from 'react';
import {  View,Text, Button } from 'react-native';
import * as RootNavigation from '../Navigation/RootNavigation'
import styles from './Styles'
import Form from './AddEventComponents/Form';
import {TimePicker} from 'react-native-simple-time-picker';

const AddEvent = (props) =>{
        var selectedDay = props.route.params.day;
        state= {
            hours: 0,
            minutes: 0
        }

        const handleChange = (hours,minutes) =>{
            this.state.hours = hours
            this.state.minutes = minutes
        }

        return(
            <View>
                <Text>{selectedDay.dateString}</Text>
                <Button title="Voltar" onPress={() => {RootNavigation.navigate("EventosLista",{day: selectedDay})}}></Button>
                
            </View>
        )
    }

export default AddEvent;