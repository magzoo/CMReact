import React, {useState} from 'react';
import {  View,TouchableOpacity, Text, Button, TextInput, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as RootNavigation from '../../Navigation/RootNavigation'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

import styles from './Styles'
import {RemoveEvent,getChosenEvent} from './EventRow'



const Buttons = (props) => {
  const selectedDay = props.day;
  const[value,setValue] = useState("");
  const {email, displayName} = auth().currentUser;

  const [emailList, setEmailList] = useState([]);
  firestore()
      .collection("Users")
      .get()
      .then(querySnapshot => {
          let list = [];
          querySnapshot.forEach(element => {
              list.push(element.data().email);
          });
          setEmailList(list);
      });

    const shareEvent = (parEmail) => {
    if( parEmail != ""){
        console.log(parEmail);
        let found = false;
        var BreakException = {};
        try {
            emailList.forEach(element => {
                if(found){throw BreakException;}
                if (parEmail == element){
                    let event = getChosenEvent();
                    firestore().collection("Events").add({address: event.address, 
                                                        day: event.day,
                                                        description: event.description,
                                                        name: event.name + " - " + email,
                                                        time: event.time,
                                                        type: event.type,
                                                        userEmail: parEmail});
                    ToastAndroid.show("Evento partilhado", 3);
                    found = true;
                }
            });
        }catch (e) {
            if (e !== BreakException) throw e;
        }
    } 
  };

    return (
        <View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonViewLeft}>
                    <Button title="Adicionar" onPress={()=>{ 
                        if(selectedDay.dateString != "Selecione um dia"){
                            RootNavigation.navigate("AddEvent",{day: selectedDay, schedule:props.schedule})
                        }
                    }}/>
                </View>
                <View style={styles.buttonView}>
                    <Button title="Remover" onPress={()=>{ 
                        if(Object.keys(getChosenEvent()).length !== 0){
                        RemoveEvent();
                        }
                    }}/>
                </View>
                <View style={styles.buttonViewRight}>
                    <Button title="Editar" onPress={()=>{ 
                        if(Object.keys(getChosenEvent()).length !== 0){
                            RootNavigation.navigate("EditEvent",{day:selectedDay ,event: getChosenEvent(), schedule: props.schedule})
                        }
                        }}/>
                </View>
                
            </View>
            <View style = {{margin: 10}}>
                    <Text style={styles.textInputTitle}>Insira o email de um Utilizador:</Text>
                    <View style={styles.buttonContainer}>
                        <TextInput style={styles.textInput} placeholder="" onChangeText={(email) => {setValue(email)}} ></TextInput>
                        <Button title="Partilhar" onPress={()=>{ shareEvent(value)}}/>
                    </View>
                </View>
        </View>
    );
};

export default Buttons;