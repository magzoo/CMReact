import React, {useState} from 'react';
import {View, Button, Platform, Text, TextInput} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { exp } from 'react-native/Libraries/Animated/Easing';
import Geocoder from 'react-native-geocoder';

import styles from './Styles'


  const EventMap = () => {
    const [address,onChangeAddress] = useState("None");
    var locationArray = [{
      position: {
      lat: 37.78825,
      lng: -122.4324,
      },
      }];
      return(
        <View>
          <TextInput placeholder="Insira Morada" onChangeText={onChangeAddress} value={address}></TextInput>
          <Button title="Inserir Morada" onPress={()=>{
            Geocoder.geocodeAddress(address).then(res => {
              locationArray = res;
              console.log((locationArray[0].position.lat))
            })
          .catch(err => console.log(err))
            }}/>
            <MapView
              style={styles.map}
              initialRegion={{
               latitude: (locationArray[0].position.lat),
               longitude: (locationArray[0].position.lng),
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421,
             }}
             >
               <Marker coordinate={{
                 latitude:(locationArray[0].position.lat),
                 longitude: (locationArray[0].position.lng)}}
                 image={require('../../../Assets/images/pin.png')}
                 style={styles.marker}/>
             </MapView>
        </View>
      )
  }

  export default EventMap;