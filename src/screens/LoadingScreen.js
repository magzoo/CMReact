import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth'
import splash from '../../Assets/images/splash2.png'

export default class LoadingScreen extends React.Component{
    componentDidMount(){
        auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "Nav" : "Login");
        });
    }

    render(){
        return(
            <ImageBackground style = {styles.container} source = {require('../../Assets/images/splash2.png')} >
                <ActivityIndicator size = "large"></ActivityIndicator>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        resizeMode: 'cover'
    },
    load: {
        paddingBottom: "20%",
        alignItems: "center"
    },
});