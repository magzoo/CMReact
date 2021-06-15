import React, {useState} from 'react';
import {View, Button, Platform, Text, TextInput} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { exp } from 'react-native/Libraries/Animated/Easing';
import Geocoder from 'react-native-geocoder';

import styles from './Styles'


  const EventMap = () => {
    const [address,onChangeAddress] = useState("None");
    var locationArray;
      return(
        <View>
          <TextInput placeholder="Insira Morada" onChangeText={onChangeAddress} value={address}></TextInput>
          <Button title="Inserir Morada" onPress={()=>{
            Geocoder.geocodeAddress(address).then(res => {
              locationArray = res;
              console.log(locationArray);
            })
          .catch(err => console.log(err))
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
                 latitude:37.78825,
                 longitude: -122.4324}}
                 image={require('../../../Assets/images/pin.png')}
                 style={styles.marker}/>
             </MapView>
        </View>
      )
  }

  export default EventMap;