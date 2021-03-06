import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import auth from '@react-native-firebase/auth';

import Index from './Index';
import EventNavigator from '../Navigation/EventNavigator';
import HomeNavigator from '../Navigation/HomeNavigator'
import editprofile from './EditProfileScreen'

function SettingsScreen() {
  state = {
    email: "",
    displayName: ""
  }

componentDidMount = () => {
  const {email, displayName} = auth().currentUser;
  state.email = email;
  state.displayName = displayName;
}

componentDidMount();

signOutUser = () => {
  auth().signOut();
}

  return (
    <View style={styles.container}>
      <Text>hi {state.email}!</Text>

      <TouchableOpacity style={{marginTop: 32}} onPress={signOutUser}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Calendário" component={HomeNavigator} />
      <Tab.Screen name="Eventos" component={EventNavigator} />
      <Tab.Screen name="Perfil" component={editprofile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default MyTabs;