import * as React from "react";
import {View, ScrollView} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';



import NavBar from '../screens/NavBar';
import LoginScreen from '../screens/LoginScreen';
import LoadingScreen from "../screens/LoadingScreen";
import RegisterScreen from "../screens/RegisterScreen";


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Loading" component={LoadingScreen}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen}/>
      <Stack.Screen name="Nav" component={NavBar}/>
    </Stack.Navigator>
  );
}

export default MyStack;
