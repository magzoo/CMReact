import React from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import styles from './Styles'

const EventListRow = (props) =>{
    const selectedDay = props.day.dateString;
    const events = props.events;
    const schedule = props.schedule;
    var finalEvents = [];
    events.forEach(element => {
        if(element.day === selectedDay){
            finalEvents.push(element);
        }
        
    });

    return (
        <View>
                    {
                        
                        finalEvents.map((userData) => {
                            return(
                                
                                <View style={styles.eventContainer}>
                                    <TouchableOpacity style={styles.buttonEventContainer}>
                                        <View style={styles.nameHour}>
                                            <Text style={styles.textMarginLeft}>Nome :{userData.name}</Text>
                                            <Text style={styles.textMarginRight}>Horas: {userData.time}</Text>
                                        </View>
                                        <Text style={styles.textMarginLeft}>Descrição: {userData.description}</Text>
                                        <Text style={styles.textMarginLeft}>Morada: {userData.address}</Text>
                                    </TouchableOpacity>
                                </View>
                        )})
                    }
                </View>
    )
}
export default EventListRow;