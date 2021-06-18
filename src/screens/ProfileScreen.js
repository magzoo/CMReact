import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState,useEffect,useContext}from 'react';
import {View, StyleSheet,Text, Button,SafeAreaView,ScrollView,Image, TouchableOpacity} from 'react-native';
import { Tab } from 'react-native-elements';
import {Avatar, Title, TouchableRipple} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as RootNavigation from '../Navigation/RootNavigation'
import auth from '@react-native-firebase/auth';
import { RootTagContext } from 'react-native/Libraries/ReactNative/RootTag';
export default class ProfileScreen extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
      return(
          <SafeAreaView style={{flex:1, backgroundColor:'#ffff'}}>
            <ScrollView style={styles.container} 
            contentContainerStyle={{justifyContent:'center', alignItems:'center'}}
            showsVerticalScrollIndicator={false}>
            <Image style={styles.userImg} source={require ('../Images/her.jpg',)}/>
            <Text style={styles.userName}>Cabrita Capone </Text>
            <View style={styles.userBtnWrapper}>
              <TouchableOpacity style={styles.userBtn} onPress={()=> {RootNavigation.navigate("EditProfile")}}>
                <Text style={styles.userBtnTxt}>Editar Perfil</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userBtn} onPress={()=>{  auth().signOut();
              RootNavigation.navigate("Login")}}>
                <Text style={styles.userBtnTxt}>Logout</Text> 
              </TouchableOpacity>
            </View>
            <View style={styles.userBtnWrapper}>
              <TouchableOpacity style={styles.userBtn} onPress={() => { 
                auth().currentUser.delete()
                RootNavigation.navigate("Login")
                  }}
                      >
                <Text style={styles.userBtnTxt}>Eliminar Conta</Text>
              </TouchableOpacity>
            </View>
            </ScrollView>
          
          </SafeAreaView>
          
    );
  };
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 14,
  },
  userEmail: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 14,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    marginTop: 14,
  },
  userBtnTxt: {
    color: '#2e64e5',
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
