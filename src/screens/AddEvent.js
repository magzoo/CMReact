import React, {useState} from 'react';
import {View, Button, Platform, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as RootNavigation from '../Navigation/RootNavigation'
import EventMap from '../Components/AddEventComponents/EventMap';

const AddEvent = (props) =>{
        var selectedDay = props.route.params.day;
        const [date, setDate] = useState(new Date(1598051730000));
        const [mode, setMode] = useState('date');
        const [show, setShow] = useState(false);
      
        const onChange = (event, selectedDate) => {
          const currentDate = selectedDate || date;
          setShow(Platform.OS === 'ios');
          setDate(currentDate);
        };
      
        const showMode = (currentMode) => {
          setShow(true);
          setMode(currentMode);
        };
      
        const showTimepicker = () => {
          showMode('time');
        };
        
        return(
            <View>
                <Text>{selectedDay.dateString}</Text>
                <Button title="Voltar" onPress={() => {RootNavigation.navigate("EventosLista",{day: selectedDay})}}></Button>
                <Button onPress={showTimepicker} title="Show time picker!" />

                {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
                )}
                <Text>{date.getHours()}:{date.getMinutes()}</Text>
                <EventMap/>
            </View>
        )
    }

export default AddEvent;