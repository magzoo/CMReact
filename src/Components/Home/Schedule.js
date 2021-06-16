import * as React from "react";
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


class Schedule extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      types: [],
      events:[],
      markers: [],
      mark: {},
      value: 0,
    };
    const {email, displayName} = auth().currentUser;

    let that = this;
    firestore()
      .collection("Schedules")
      .where('userEmail','==',email)
      .get()
      .then(function(querySnapShot){
          var types2 = [];
          querySnapShot.forEach(function(doc){
              types2.push(doc.data().name);
          });
          that.setState({types: types2})
      });


  }


  render(){
    return(
      <View>
        <View style={styles.container}>
        <Picker style={styles.picker}
        selectedValue={this.state.types[0]}
        onValueChange={(value) => {
          let that = this;
            firestore()
            .collection("Events")
            .where("type", '==', that.state.types[value])
            .get()
            .then(function(querySnapShot){
              var events2 = [];
              querySnapShot.forEach(function(doc){
                events2.push(doc.data());
              });
              that.setState({events: events2 });
              var markers2 = []
              that.state.events.forEach((day) =>{
                markers2.push(day.day)
              });
              that.setState({markers: markers2});
              var mark2 = {};
              that.state.markers.forEach((day) =>{
                mark2[day] = {selected: true}
              })
              that.setState({mark: mark2});
              that.setState({value: value})
            });
        }}>
            {
            this.state.types.map((item,index) => {
                return (
                    <Picker.Item label={item} value={index}/>
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
          onDayPress={(day) => {RootNavigation.navigate('EventosLista',{day: day, schedule: this.state.types[this.state.value], events: this.state.events})}}
          hideArrows={false}

          markedDates={ this.state.mark }
        />
        </View>
      </View>

    )
}
}


export default Schedule;