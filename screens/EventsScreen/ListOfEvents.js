import React from 'react'
import { StyleSheet,ScrollView, Text, View } from 'react-native'

import styles from './Styles'
import Row from './EventRow';

const ListEvents = () =>{
    return(
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>11/06/2021</Text>
            </View>
                <Row/>
        </View>
    )
}

export default ListEvents;