import React from "react";
import {View, Text} from "react-native";


import Buttons from './EventsScreen/Buttons';
import EventList from './EventsScreen/ListOfEvents';

const EventScreen= () =>{
    return (
        <View>
            <EventList/>
            <Buttons/>
        </View>
    );
};

export default EventScreen;