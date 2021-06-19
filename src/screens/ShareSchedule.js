import React,{useState}  from 'react';
import {  View,TouchableOpacity, Text,Button } from 'react-native';
import * as RootNavigation from '../Navigation/RootNavigation';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Picker} from '@react-native-picker/picker'
import styles from '../Components/Home/Styles';


const ShareSchedule =()  =>{
    const[types,setTypes] = useState([]);
    const {email, displayName} = auth().currentUser;
    const[value,setValue] = useState(0);

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
      return (
        <View>
            <View style={styles.container}>
                <Picker style={styles.picker}
                selectedValue={types[0]}
                onValueChange={(value) => {
                setValue(value);
                }}>
                    {
                    types.map((item,index) => {
                        return (
                            <Picker.Item label={item} value={index} key={index} />
                        )
                    })}
                </Picker>
            </View>
        </View>
      )


}
export default ShareSchedule;