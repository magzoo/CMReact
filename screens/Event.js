import React from "react";
import {View, ScrollView} from "react-native";


import Buttons from './EventsScreen/Buttons';
import EventList from './EventsScreen/ListOfEvents';

const EventScreen= () =>{
    return (
        <View>
            <ScrollView>
                <EventList/>
                <Buttons/>
            </ScrollView>
        </View>
    );
};

export default EventScreen;