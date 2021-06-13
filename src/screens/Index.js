import React from "react";
import {View, Text} from "react-native";


import SchedulePicker from '../Components/Home/SchedulePicker'
import Schedule from '../Components/Home/Schedule'

const HomeScreen= () =>{
    return (
        <View>
            <SchedulePicker/>
            <Schedule/>
        </View>
    );
};

export default HomeScreen;