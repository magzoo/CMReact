import React from 'react'
import { StyleSheet,ScrollView, Text, View } from 'react-native'

import styles from './Styles'
import {EventListRow} from './EventRow';

const ListEvents = (props) =>{
    const selectedDay = props.day;
    return(
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{selectedDay.dateString}</Text>
            </View>
                <EventListRow day={selectedDay} schedule={props.schedule}/>
        </View>
    )
}

export default ListEvents;