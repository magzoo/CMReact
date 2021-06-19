import React, {useState} from 'react';
import {  View,TouchableOpacity, Text,Button, TextInput, ToastAndroid } from 'react-native';
import * as RootNavigation from '../../Navigation/RootNavigation'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import {getSelectedType} from './Schedule';

import styles from './Styles'


const Buttons = () => {
    const[value,setValue] = useState("");
    const {email, displayName} = auth().currentUser;
    const type = getSelectedType();

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

    const shareSchedule = (parEmail) => {
            if( parEmail != ""){
                let found = false;
                var BreakException = {};
                let parEmailEvents = [];
                firestore().collection("Events").where("userEmail", "==", parEmail);
                try{
                    emailList.forEach(element => {
                        if(found){throw BreakException;}
                        if (parEmail == element){
                            firestore().collection("Schedules").add({name: type + " - " + email, userEmail: parEmail});
                            console.log("ola");
                            firestore().collection("Events")
                                .where("userEmail", "==", email)
                                .where("type", "==", type)
                                .get()
                                .then(function (querySnapShot) {
                                    console.log(querySnapShot);
                                    querySnapShot.forEach(doc => {
                                        console.log(doc.data().address);
                                        firestore().collection("Events").add({address: doc.data().address, 
                                                                            day: doc.data().day,
                                                                            description: doc.data().description,
                                                                            name: doc.data().name,
                                                                            time: doc.data().time,
                                                                            type: doc.data().type + " - " + email,
                                                                            userEmail: parEmail});
                                    });
                                    
                                });
                            ToastAndroid.show("Calendário partilhado", 3);
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
                    <Button title="Adicionar" onPress={()=>{ RootNavigation.navigate("AddSchedule")}}/>
                </View>
                <View style={styles.buttonView}>
                    <Button title="Remover" onPress={()=>{ RootNavigation.navigate("RemoveSchedule")}}/>
                </View>
                <View style={styles.buttonViewRight}>
                    <Button title="Editar" onPress={()=>{ RootNavigation.navigate("EditSchedule")}}/>
                </View>
                
            </View>
            <View style = {{margin: 10}}>
                <Text style={styles.textInputTitle}>Insira o email de um Utilizador:</Text>
                <View style={styles.buttonContainer}>
                    <TextInput style={styles.textInput} placeholder="" onChangeText={(email) => {setValue(email)}} ></TextInput>
                    <Button title="Partilhar" onPress={()=>{ shareSchedule(value)}}/>
                </View>
            </View>
        </View>
    );
};

export default Buttons;