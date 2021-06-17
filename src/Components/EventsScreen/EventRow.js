import React, {useState} from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import styles from './Styles'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import * as RootNavigation from '../../Navigation/RootNavigation'
var nChosenEvent = {};

const setChosenEvent = (chosenEvent) =>{
     nChosenEvent = chosenEvent;
}

const getChosenEvent = () =>{
    return nChosenEvent;
}

const EventListRow = (props) =>{
    const selectedDay = props.day.dateString;
    const [events,setEvents] = useState([]);
    const {email, displayName} = auth().currentUser;
    const [selectedEvent, setSelectedEvent] = useState({});
    const schedule = props.schedule;
    var finalEvents = [];
    firestore().collection("Events")
    .where("type","==",schedule)
    .where("day","==",selectedDay)
    .where("userEmail","==",email)
    .get()
    .then(querySnapShot =>{
        querySnapShot.forEach(doc =>{
            finalEvents.push(doc.data())
        })

        setEvents(finalEvents)
    })

    return (
        <View>
                    {
                        
                        events.map((userData) => {
                            return(
                                
                                <View style={styles.eventContainer}>
                                    <TouchableOpacity style={styles.buttonEventContainer} onPress={() =>{setSelectedEvent({name: userData.name,
                                    day:userData.day,
                                    address: userData.address,
                                    description: userData.description,
                                    time: userData.time,
                                    type: userData.type,
                                    userEmail: userData.userEmail
                                    });
                                    setChosenEvent(selectedEvent);
                                    }}>
                                        <View style={styles.nameHour}>
                                            <Text style={styles.textMarginLeft}>Nome :{userData.name}</Text>
                                            <Text style={styles.textMarginRight}>Horas: {userData.time}</Text>
                                        </View>
                                        <Text style={styles.textMarginLeft}>Descrição: {userData.description}</Text>
                                        <Text style={styles.textMarginLeft}>Localização: {userData.address}</Text>
                                    </TouchableOpacity>
                                </View>
                        )})
                    }
                </View>
    )
}

const RemoveEvent = (props) =>{
    const {email, displayName} = auth().currentUser;
    if(getChosenEvent().name !== ""){
        console.log(getChosenEvent())
        firestore().collection("Events")
        .where("userEmail", "==", email)
        .where("name","==",getChosenEvent().name)
        .where("description","==",getChosenEvent().description)
        .get()
        .then(querySnapShot => {
            querySnapShot.forEach((element) =>{
                element.ref.delete();
            })
        })

    }
}


export { EventListRow, RemoveEvent, getChosenEvent};