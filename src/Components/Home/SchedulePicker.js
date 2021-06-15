import * as React from "react";
import {View, Text, ActivityIndicator} from "react-native";
import {Picker} from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

import styles from './Styles'

/*
    const SchedulePicker= () =>{
        state = {types: []};
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
                console.log(types2);
                setState({types: types2});
            });

        return ( 
            <View style={styles.container}>
                <Picker style={styles.picker}
                selectedValue={state.types[0]}
                onValueChange={() => {}}>
                    {
                    state.types.map((item,index) => {
                        return (
                            <Picker.Item label={item} value={index}/>
                        )
                    })}
                </Picker>
            </View>
        );
    };*/

class SchedulePicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {types: []};
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
            <View style={styles.container}>
            <Picker style={styles.picker}
            selectedValue={this.state.types[0]}
            onValueChange={() => {}}>
                {
                this.state.types.map((item,index) => {
                    return (
                        <Picker.Item label={item} value={index}/>
                    )
                })}
            </Picker>
        </View>
        )
    }
}


    export default SchedulePicker;
