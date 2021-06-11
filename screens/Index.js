import React from "react";
import {View, Text} from "react-native";


import SchedulePicker from './Home/SchedulePicker'
import Schedule from './Home/Schedule'

const HomeScreen= () =>{
    return (
        <View>
            <SchedulePicker/>
            <Schedule/>
        </View>
    );
};

export default HomeScreen;