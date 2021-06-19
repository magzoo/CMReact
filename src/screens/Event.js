import * as React from "react";
import {View, ScrollView} from "react-native";
import auth from '@react-native-firebase/auth'



import Buttons from '../Components/EventsScreen/Buttons';
import EventList from '../Components/EventsScreen/ListOfEvents';


const EventScreen = (props) =>{
    if(auth().currentUser){

    
    var selectedDay = {
        "dateString": "Selecione um dia"
     };
     var selectedSchedule = "None"
     
     if (props.route.params){
         selectedDay = props.route.params.day;
         selectedSchedule = props.route.params.schedule;
     }
    return (
        <View>
            <ScrollView>
                <EventList day={selectedDay} schedule={selectedSchedule}/>
                <Buttons day={selectedDay} schedule={selectedSchedule}/>
            </ScrollView>
        </View>
    );
    }else{
        return (
          <View>
            <Text> ;)</Text>
          </View>
        )
      }
};

export default EventScreen;