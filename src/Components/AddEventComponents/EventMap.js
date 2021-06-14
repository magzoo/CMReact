import React, {useState} from 'react';
import {View, Button, Platform, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { exp } from 'react-native/Libraries/Animated/Easing';

import styles from './Styles'

  const EventMap = () => {
      return(
        <MapView style={styles.map}
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
            style={styles.marker}
            resizeMode="contain"></Marker>
        </MapView>
      )
  }

  export default EventMap;