import React from 'react'
import { StyleSheet,ScrollView, Text, View } from 'react-native'

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
            "horas": '16:40'}]

function EventListRow() {
    return(
        <View>
            {
                eventList.map((userData) => {
                    <View>
                        <Text>{userData.name}</Text>
                        <Text>{userData.type}</Text>
                        <Text>{userData.morada}</Text>
                        <Text>{userData.horas}</Text>
                    </View>
                })
            }
        </View>
    )
}

const ListEvents = () =>{
    return(
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>11/06/2021</Text>
            </View>
            <ScrollView>
                <EventListRow/>
            </ScrollView>
        </View>
    )
}

export default ListEvents;