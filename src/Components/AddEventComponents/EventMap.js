import React, {useState} from 'react';
import {View, Button, Platform, Text} from 'react-native';
import MapView from 'react-native-maps';
import { exp } from 'react-native/Libraries/Animated/Easing';

function getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  
 function onRegionChange(region) {
    this.setState({ region });
  }

  const EventMap = () => {
      return(
          <MapView
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
            />
      )
  }

  export default EventMap;