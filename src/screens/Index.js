import React, {useState} from "react";
import {View, Text, ScrollView} from "react-native";
import Buttons from '../Components/Home/Buttons'
import Schedule from '../Components/Home/Schedule'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

class HomeScreen extends React.Component{
        constructor(props){
                super(props);
        }

        render(){
               return(
                <ScrollView>
                        <Schedule/>
                        <Buttons/>
                </ScrollView>   
               ) 
        }
}

/*
const HomeScreen= () =>{
        const[types,setTypes] = useState([]);
        const {email, displayName} = auth().currentUser;
        firestore()
        .collection("Schedules")
        .where('userEmail','==',email)
        .get()
        .then(function(querySnapShot){
                var types2 = [];
                querySnapShot.forEach(function(doc){
                types2.push(doc.data().name);
                });
                setTypes(types2);
        });
        return(
        <View>
        <Schedule types={types}/>
        <Buttons types= {types}/>
        </View>   
        )

};
*/
export default HomeScreen;