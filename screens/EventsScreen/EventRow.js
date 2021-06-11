import React from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'

import styles from './Styles'

eventList = [{"name": 'Teatro',
            "type": 'cultural',
            "morada": 'Rua D. Manuel',
            "horas": '16:40'},
            {"name": 'Teatro',
            "type": 'cultural',
            "morada": 'Rua D. Manuel',
            "horas": '16:40'},
            {"name": 'Teatro',
            "type": 'cultural',
            "morada": 'Rua D. Manuel',
            "horas": '16:40'},
            {"name": 'Teatro',
            "type": 'cultural',
            "morada": 'Rua D. Manuel',
            "horas": '16:40'},
            {"name": 'Teatro',
            "type": 'cultural',
            "morada": 'Rua D. Manuel',
            "horas": '16:40'},
            {"name": 'Teatro',
            "type": 'cultural',
            "morada": 'Rua D. Manuel',
            "horas": '16:40'}]

const EventListRow = () => {
    return(
        <View>
            {
                eventList.map((userData) => {
                    return(
                        
                        <View style={styles.eventContainer}>
                            <TouchableOpacity style={styles.buttonEventContainer}>
                                <View style={styles.nameHour}>
                                    <Text style={styles.textMarginLeft}>Nome :{userData.name}</Text>
                                    <Text style={styles.textMarginRight}>Horas: {userData.horas}</Text>
                                </View>
                                <Text style={styles.textMarginLeft}>Descrição: {userData.type}</Text>
                                <Text style={styles.textMarginLeft}>Morada: {userData.morada}</Text>
                            </TouchableOpacity>
                        </View>
                )})
            }
        </View>
    )
}

export default EventListRow;