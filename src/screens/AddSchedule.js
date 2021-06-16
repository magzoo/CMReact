import * as React from "react";
import {View, Text,TextInput, ScrollView, Button,  StyleSheet} from "react-native";
import * as RootNavigation from '../Navigation/RootNavigation'
import auth from '@react-native-firebase/auth'
import fireStore from "@react-native-firebase/firestore";

const AddSchedule = () =>{
    var newSchedule = "";
    return(
        <View>
            <Text style={styles.title}>Adicionar Calendário</Text>
            <TextInput style={styles.textInput} placeholder="Insira novo calendário" onChangeText={(value) =>{ newSchedule = value}}></TextInput>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainerLeft}>
                    <Button title="Voltar" onPress={() => {RootNavigation.navigate("HomeScreen")}}/>
                </View>
                <View style={styles.buttonContainerRight}>
                    <Button title="Adicionar" onPress={() =>{
                        const {email, displayName} = auth().currentUser;
                        if(newSchedule !== ""){
                            fireStore().collection('Schedules').add({
                                "name":newSchedule,
                                "userEmail": email,
                        });
                        RootNavigation.navigate("HomeScreen");
                        }
                    }} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        
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
        textAlign:"center",
        marginTop: 50
        
    }

});
export default AddSchedule;