import React, {useState} from "react";
import {View, Text, ScrollView} from "react-native";
import Buttons from '../Components/Home/Buttons'
import Schedule from '../Components/Home/Schedule'
import auth from '@react-native-firebase/auth'

class HomeScreen extends React.Component{
        constructor(props){
                super(props);
        }

        render(){
                if(auth().currentUser){
               return(
                <ScrollView>
                        <Schedule/>
                        <Buttons/>
                </ScrollView>   
               ) 
                }else{
                        return (
                          <View>
                            <Text> ;)</Text>
                          </View>
                        )
                      }
        }
}

export default HomeScreen;