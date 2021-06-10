import React, {useState} from "react";
import {View, Text} from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import styles from './Styles'

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pt'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar.','Abr.','Maio','Jun.','Jul.','Ago.','Set.','Out.','Nov.','Dez.'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sáb.'],
  today: 'Hoje\'Hoje'
};
LocaleConfig.defaultLocale = 'pt';


const Schedule = () => {
    return (
        <CalendarList
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={0}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={0}
          maxDate={new Date()}
          onDayPress={(day) => {console.log('selected day',day)}}
          hideArrows={false}
          
        />

    );
};


export default Schedule;