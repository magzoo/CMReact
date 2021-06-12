import React from 'react'
import { StyleSheet,ScrollView, Text, View } from 'react-native'

import styles from './Styles'
import Row from './EventRow';
import * as RootNavigation from '../Navigation/RootNavigation'

const ListEvents = (props) =>{
    const selectedDay = props.day;
    return(
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{selectedDay.dateString}</Text>
            </View>
                <Row/>
        </View>
    )
}

export default ListEvents;