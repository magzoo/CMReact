import React, {useState} from "react";
import {View, Text,TextInput, ScrollView, Button,  StyleSheet} from "react-native";
import * as RootNavigation from '../Navigation/RootNavigation'
import {Picker} from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

const RemoveSchedule = () =>{
    var newSchedule = "";
    const[types,setTypes] = useState([]);
    const[value,setValue] = useState(0);

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
                <Text style={styles.title}>Remover Calendário</Text>
                <View style={styles.pickerView}>
                    <Text style={styles.infoText}>Selecione o calendário que pretende remover:</Text>
                    <View style={styles.container}>
                    <Picker style={styles.picker}
          selectedValue={types[0]}
          onValueChange={(value) => { setValue(value) }}>
              {
              types.map((item,index) => {
                  return (
                      <Picker.Item label={item} value={index}/>
                  )
              })
              }</Picker>
                </View>
                </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainerLeft}>
                    <Button title="Voltar" onPress={() => {RootNavigation.navigate("HomeScreen")}}/>
                </View>
                <View style={styles.buttonContainerRight}>
                    <Button title="Remover" onPress={() =>{
                        const {email, displayName} = auth().currentUser;
                        if(types[value] != ""){
                            firestore().collection("Schedules")
                            .where("userEmail","==",email)
                            .where("name","==",types[value])
                            .get()
                            .then(querySnapShot => {
                                querySnapShot.docs[0].ref.delete();
                            })

                            firestore().collection("Events")
                            .where("userEmail","==",email)
                            .where("type","==",types[value])
                            .get()
                            .then(querySnapShot => {
                                querySnapShot.forEach((element) =>{
                                    element.ref.delete();
                                })
                            })
                        RootNavigation.navigate("HomeScreen");
                        }
                    }} />
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#33BDFF',
        width: '80%',
        marginLeft: 20,
        marginTop: 10,
      },
        buttonsContainer : {
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            marginBottom: 10,
        
        
    },
    buttonContainerLeft: {
        width: '30%',
        marginRight: 10,
        marginTop: 30
    },
    buttonContainerRight: {
        width: '30%',
        marginLeft: 10,
        marginTop: 30
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30
    },
    textInput: {
        textAlign:"center",
        marginTop: 50
        
    },
    pickerView: {
        justifyContent: 'center',
        marginLeft: 20,
    },
    infoText: {
        marginLeft: 15,
        marginTop: 15,
    },
    picker: {
        width: '100%',
        height: '10%',
        borderWidth: 15,
        borderRadius: 15,
      },
});

export default RemoveSchedule;