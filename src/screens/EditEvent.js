import React, {useState} from 'react';
import {View, Button, Platform, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as RootNavigation from '../Navigation/RootNavigation'
import MapView, {Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoder';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { add } from 'react-native-reanimated';

const EditEvent = (props) =>{
        var selectedDay = props.route.params.day;
        var chosenEvent = props.route.params.event;
        const [date, setDate] = useState(new Date(1598051730000));
        const [mode, setMode] = useState('date');
        const [show, setShow] = useState(false);
        const [address,onChangeAddress] = useState("None");
        const [eventName, setEventName] = useState("");
        const [description, setDescription] = useState("");
        const [lat,setLat] = useState(38.676525);
        const [lng,setLng] = useState(-9.165105);
        const {email, displayName} = auth().currentUser;
      
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
              <ScrollView>
              <View>
                <Text style={styles.title}>Editar Evento</Text>
              <View>
                    <Text style={styles.textInputTitle}>Nome do evento:</Text>
                    <TextInput style={styles.textInput} placeholder="Insira novo Nome" onChangeText={(value) => {setEventName(value)}} ></TextInput>
                  </View>
                  <View>
                    <Text style={styles.textInputTitle}>Descrição do evento:</Text>
                    <TextInput style={styles.textInput} placeholder="Insira nova descrição" onChangeText={(value) => {setDescription(value)}}></TextInput>
                  </View>
                  <View style={styles.timeButtonContainer}>
                  <View style={styles.timeButton}>
                    <Button onPress={showTimepicker} title="Escolha a hora do evento" />
                  </View>
                  </View>
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
                <View>               
                   <Text style={styles.textInputTitle}>Hora escolhida: {date.getHours()}:{date.getMinutes()}</Text>
                </View>
                <View>
                  <View style={styles.moradaMargin}>
                    <Text style={styles.textInputTitle}>Morada do evento:</Text>
                    </View>
                    <TextInput style={styles.textInput} placeholder="Insira nova localização" onChangeText={(value) => onChangeAddress(value)}></TextInput>
                </View>
                <View style={styles.timeButtonContainer}>
                <Button title="Inserir localização" onPress={()=>{
                    Geocoder.geocodeAddress(address).then(res => {
                      var locationArray = res;
                      setLat((locationArray[0].position.lat))
                      setLng((locationArray[0].position.lng))
                    })
                  .catch(err => console.log(err))
                    }}/>
                </View>
                <View style={styles.moradaMargin}>
                <View style={styles.mapContainer}>
                <MapView
                  style={styles.map}
                  region={{
                  latitude: lat,
                  longitude: lng,
                  latitudeDelta: 0.04,
                  longitudeDelta: 0.05,
              
                }}
                >
                 <Marker coordinate={{
                 latitude:lat,
                 longitude: lng}}
                 image={require('../../Assets/images/pin.png')}
                 style={styles.marker}/>
             </MapView>
             </View>
             </View>
                </View>
                <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainerLeft}>
                  <Button title="Voltar" onPress={() => {
                    RootNavigation.navigate("EventosLista",{day: selectedDay})
                  }}/>
                  </View>
                  <View style={styles.buttonContainerRight}>
                  <Button title="Editar" onPress={()=>{
                    if(eventName != "" && description != "" && address != "None"){
                      firestore().collection("Events")
                      .where("userEmail", "==", email)
                      .where("type","==",props.route.params.schedule)
                      .where("name","==",chosenEvent.name)
                      .where("description","==",chosenEvent.description)
                      .get()
                      .then(querySnapShot => {
                        querySnapShot.docs[0].ref.update({
                          "name": eventName,
                          "description": description,
                          "day": selectedDay.dateString,
                          "address": address,
                          "type": props.route.params.schedule,
                          "userEmail": email,
                          "time": date.getHours() + ":" + date.getMinutes()
                        });
                    });

                      RootNavigation.navigate("EventosLista",{day: selectedDay})
                    }
                  }}/>
                </View>
                </View>
                </ScrollView>
            </View>
        )
    }


    const styles = StyleSheet.create({
      buttonsContainer : {
          flexDirection: 'row',
          justifyContent: 'space-between',
          
          
      },

      timeButtonContainer:{
        alignItems: 'center'
      },

      timeButton: {
        width: '40%',
        marginTop: 15,
      },
      buttonContainerNormal: {
        alignItems: 'center',
        width: '50%'
      },  
      buttonContainerLeft: {
          width: '30%',
          marginLeft: 10,
          marginTop: 50
      },
      buttonContainerRight: {
          width: '30%',
          marginRight: 10,
          marginTop: 50
      },
      title: {
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 30
      },
      textInput: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
        width: "70%",
        alignSelf: "center"
          
      },
      textInputTitle: {
        marginTop: 10,
        fontSize: 15,
        textAlign: 'center',
      },
      mapContainer: {
        alignItems: 'center'
      },
      map: {
        height: 300,
        width: '100%'
      },
      moradaMargin: {
        marginTop: 20,
      }
  
  });

export default EditEvent;