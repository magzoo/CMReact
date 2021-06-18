import * as React from "react";
import {View, ScrollView} from "react-native";



import Buttons from '../Components/EventsScreen/Buttons';
import EventList from '../Components/EventsScreen/ListOfEvents';


const EventScreen = (props) =>{
    var selectedDay = {
        "dateString": "Selecione um dia"
     };
     var selectedSchedule = "None"
     var events = [];
     if (props.route.params){
         selectedDay = props.route.params.day;
         selectedSchedule = props.route.params.schedule;
         event = props.route.params.event;
     }
    return (
        <View>
            <ScrollView>
                <EventList day={selectedDay} schedule={selectedSchedule}/>
                <Buttons day={selectedDay} schedule={selectedSchedule}/>
            </ScrollView>
        </View>
    );
};

export default EventScreen;