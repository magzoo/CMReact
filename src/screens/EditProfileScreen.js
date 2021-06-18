import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState,useEffect,useContext}from 'react';
import { Icon } from 'react-native-elements'
import {View, StyleSheet,Text, Button,SafeAreaView,
  ScrollView,Image, TouchableOpacity,ImageBackground,TextInput,opacity} from 'react-native';
import Animated from 'react-native-reanimated';
export default class EditProfile extends React.Component{
	const [response, setResponse] = React.useState<any>(null);

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);
  render(){
      return(
          <View style={styles.container}>
              <View style={{margin:20}}>
                <View style={{alignItems:'center'}}>
                  <TouchableOpacity onPress={()=>{}}>
                    <View style={{height:100,width:100,borderRadius:15,
                      justifyContent:'center',alignItems:'center'}}>

                      <ImageBackground 
                        source={require ('../Images/her.jpg',)}
                        style={{height:100,width:100}}
                        imageStyle={{borderRadius:50}}
                      >
                          <View>
                              <Image source={require ('../Images/camera.png',)} size={35} style={{
                                height:30,width:30,
                                opacity:0.7,
                                alignItems:'center',
                                marginLeft:3,
                                marginTop:12,

                              }}/>
                          </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                  <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}>Cabrita</Text>
                </View>
                <View style={styles.action}>
                <Image source={require ('../Images/nome.png',)} size={35} style={{
                                height:20,width:20,
                              }}/>
                  <TextInput
                      placeholder='Nome'
                      placeholderTextColor='#6666666'
                      autoCorrect={false}
                      style={styles.textInput}
                  />

                </View>
                <View style={styles.action}>
                  
               
                <Image source={require ('../Images/email.png',)} size={35} style={{
                                height:20,width:20,
                              }}/>
                  <TextInput
                      placeholder='Email'
                      placeholderTextColor='#6666666'
                      autoCorrect={false}
                      style={styles.textInput}
                  />

                </View>
                <View style={styles.action}>
                <Image source={require ('../Images/pass.png',)} size={35} style={{
                                height:20,width:20,
                              }}/>
                  <TextInput
                      placeholder='Password'
                      placeholderTextColor='#6666666'
                      autoCorrect={false}
                      style={styles.textInput}
                  />

                </View>
                <TouchableOpacity onPress={()=> {}}>
                  <Button
                      title="Atualizar"
                      color="#669BF7"
                      onPress={()=> {}}
                  />
                </TouchableOpacity>

              </View>
          </View>
          
    );
  };
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    width: '100%',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#2e64e5',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#333333',
  },
});


