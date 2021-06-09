import React from "react";
import {View, Text} from "react-native";


import SchedulePicker from './Home/SchedulePicker'
import Schedule from './Home/Schedule'
import Buttons from './Home/Buttons'
import NavBar from './NavBar'

import styles from './Styles'

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