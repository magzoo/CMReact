import React from "react";
import {View, Text} from "react-native";
import Buttons from '../Components/Home/Buttons'
import Schedule from '../Components/Home/Schedule'

const HomeScreen= (props) =>{
        return(
        <View>
        <Schedule/>
        <Buttons/>
        </View>   
        )

};

export default HomeScreen;