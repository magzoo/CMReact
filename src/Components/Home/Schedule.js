import React, {useState} from "react";
import {View, Text} from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles'
import * as RootNavigation from '../../Navigation/RootNavigation'
import {Picker} from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pt'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar.','Abr.','Maio','Jun.','Jul.','Ago.','Set.','Out.','Nov.','Dez.'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sáb.'],
  today: 'Hoje\'Hoje'
};
LocaleConfig.defaultLocale = 'pt';


var selectedType = "";

const setSelectedType = (type) =>{
  selectedType = type;
}

export const getSelectedType = () =>{
  return selectedType;
}



const Schedule = () =>{
  const[types,setTypes] = useState([]);
  const[events,setEvents] = useState([]);
  const[mark,setMark] = useState([{}]);
  const[value,setValue] = useState(0);
  const {email, displayName} = auth().currentUser;

      firestore()
      .collection("Schedules")
      .where("userEmail","==",email)
      .get()
      .then(function (querySnapShot) {
        var types2 = [];
        querySnapShot.forEach(function (doc) {
          types2.push(doc.data().name)
        })
        setTypes(types2)
      })

      firestore()
      .collection("Events")
      .where('userEmail', "==", email)
      .get()
      .then(function(querySnapShot){
        var events2 = [];
        querySnapShot.forEach(function(doc) {
          events2.push(doc.data())
        })
        setEvents(events2)
      })

      return(
        <View>
          <View style={styles.container}>
          <Picker style={styles.picker}
          selectedValue={types[0]}
          onValueChange={(value) => {
            var mark2 = {};
            events.forEach((element) =>{
              if(element.type == types[value]){
                mark2[element.day] = {selected: true}
              }
            });
            setMark(mark2);
            setValue(value);
            setSelectedType(types[value]);
          }}>
              {
              types.map((item,index) => {
                  return (
                      <Picker.Item label={item} value={index} key={index} />
                  )
              })}
          </Picker>
          </View>
          <View>
          <Calendar
            // Callback which gets executed when visible months change in scroll view. Default = undefined
            onVisibleMonthsChange={(months) => {}}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={0}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={0}
            onDayPress={(day) => {RootNavigation.navigate('EventosLista',{day: day, schedule: types[value]})}}
            hideArrows={false}
  
            markedDates={ mark }
          />
          </View>
        </View>
  
      )


}

export default Schedule;