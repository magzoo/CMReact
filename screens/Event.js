import * as React from "react";
import {View, ScrollView} from "react-native";



import Buttons from './EventsScreen/Buttons';
import EventList from './EventsScreen/ListOfEvents';


const EventScreen = (props) =>{
    var selectedDay = {
        "dateString": "Selecione um dia"
     };
     if (props.route.params){
         selectedDay = props.route.params.day;
     }
    return (
        <View>
            <ScrollView>
                <EventList day={selectedDay}/>
                <Buttons day={selectedDay}/>
            </ScrollView>
        </View>
    );
};

export default EventScreen;