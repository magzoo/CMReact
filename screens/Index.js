import React from "react";
import {View, Text} from "react-native";


import SchedulePicker from './Home/SchedulePicker'
import Schedule from './Home/Schedule'
import Buttons from './Home/Buttons'

const HomeScreen= () =>{
    return (
        <View>
            <SchedulePicker/>
            <Schedule/>
            <Buttons/>
        </View>
    );
};

export default HomeScreen;