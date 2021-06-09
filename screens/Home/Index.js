import React from "react";
import {View, Text} from "react-native";


import SchedulePicker from './SchedulePicker'
import Schedule from './Schedule'
import NavBar from './NavBar'

import styles from './Styles'

const HomeScreen= () =>{
    return (
        <View>
            <SchedulePicker/>
            <Schedule/>
        </View>
    );
};

export default HomeScreen;