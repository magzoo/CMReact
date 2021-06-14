import React, {useState} from 'react';
import {View, Button, Platform, Text, TextInput} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { exp } from 'react-native/Libraries/Animated/Easing';

import styles from './Styles'


  const EventMap = () => {
    const [address,onChangeAddress] = useState("None");
      return(
        <View>
          <TextInput placeholder="Insira Morada" onChangeText={onChangeAddress} value={address}></TextInput>
          <Button title="Inserir Morada" onPress={()=>{
            
          }}/>
          <MapView
              style={styles.map}
              initialRegion={{
               latitude: 37.78825,
               longitude: -122.4324,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421,
             }}
             >
               <Marker coordinate={{
                 latitude: 37.78825,
                 longitude: -122.4324,}}
                 image={require('../../../Assets/images/pin.png')}
                 style={styles.marker}/>
             </MapView>
        </View>
      )
  }

  export default EventMap;