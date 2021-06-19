import * as React from "react";
import {View, ScrollView} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import * as RootNavigation from './RootNavigation'
import Profile from '../screens/ProfileScreen'
import EditProfile from '../screens/EditProfileScreen';
import LoginScreen from '../screens/LoginScreen'



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={Profile}/>
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

export default MyStack;

