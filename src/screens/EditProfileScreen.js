import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect, useContext} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import * as RootNavigation from '../Navigation/RootNavigation';
import {
  Alert,
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ToastAndroid
} from 'react-native';

const EditProfileScreen = props => {
  const [resourcePath, setResourcePath] = useState(null);
  const [res, setRes] = useState(null);
  const [uname, setUName] = useState('');
  const [uemail, setUEmail] = useState('');
  const [olddPassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [newpassword2, setNewPassword2] = useState('');
  const [userimage, setUserImage] = useState('');
  const [user, setUser] = useState();
  const {email, displayName, photoURL, password} = auth().currentUser;

  function imageGalleryLaunch() {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        console.log('response', JSON.stringify(res));
        setResourcePath(res.assets[0].uri);
      }
    });
  }
  const getUser = async () => {
    try {
      const documentSnapshot = await firestore()
        .collection('Users')
        .doc(uid)
        .get();

      const userData = documentSnapshot.data();
      setUser(userData);
    } catch {
      //do whatever
    }
  };

  // Get user on mount
  useEffect(() => {
    getUser();
  }, []);

  function handleUpdate() {
    if (uname != '') {
      firestore()
        .collection('Users')
        .where('email', '==', uemail)
        .get()
        .then(querySnapShot => {
          querySnapShot.docs[0].ref.update({
            name: uname,
          });
        });
      Alert.alert('Perfil Atualizado Com Sucesso!');
    }
  }

  
  var displayemail = email;
  var displayname = displayName;
  var imagesource = photoURL;
  return (
    <View style={styles.container}>
      <View style={{margin: 20}}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={imageGalleryLaunch}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: resourcePath
                    ? 'https://firebasestorage.googleapis.com/v0/b/cmtp2-342a4.appspot.com/o/her.jpg?alt=media&token=a164bc77-e4e9-427f-95c9-8b2704c8c937'
                    : 'https://firebasestorage.googleapis.com/v0/b/cmtp2-342a4.appspot.com/o/her.jpg?alt=media&token=a164bc77-e4e9-427f-95c9-8b2704c8c937',
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 50}}>
                <ImageBackground
                  source={{uri: resourcePath}}
                  style={{height: 100, width: 100}}
                  imageStyle={{borderRadius: 50}}>
                  <View></View>
                  <View>
                    <Image
                      source={require('../Images/camera.png')}
                      size={35}
                      style={{
                        height: 30,
                        width: 30,
                        opacity: 0.7,
                        alignItems: 'center',
                        marginLeft: 3,
                        marginTop: 12,
                      }}
                    />
                  </View>
                </ImageBackground>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            {user && user?.name}{' '}
          </Text>
        </View>
        <View style={styles.action}>
          <Image
            source={require('../Images/nome.png')}
            size={35}
            style={{
              height: 20,
              width: 20,
            }}
          />
          <TextInput
            placeholder={displayname}
            placeholderTextColor="#6666666"
            autoCorrect={false}
            onChangeText={value => setUName(value)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <Image
            source={require('../Images/email.png')}
            size={35}
            style={{
              height: 20,
              width: 20,
            }}
          />
          <TextInput
            placeholder={displayemail}
            placeholderTextColor="#6666666"
            autoCorrect={false}
            onChangeText={value => setUEmail(value)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <Image
            source={require('../Images/pass.png')}
            size={35}
            style={{
              height: 20,
              width: 20,
            }}
          />
          <TextInput
            placeholder="Antiga Password"
            placeholderTextColor="#6666666"
            autoCorrect={false}
            secureTextEntry = {true}
            onChangeText={value => setOldPassword(value)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <Image
            source={require('../Images/pass.png')}
            size={35}
            style={{
              height: 20,
              width: 20,
            }}
          />
          <TextInput
            placeholder="Nova Password"
            placeholderTextColor="#6666666"
            autoCorrect={false}
            secureTextEntry = {true}
            onChangeText={value => setNewPassword(value)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <Image
            source={require('../Images/pass.png')}
            size={35}
            style={{
              height: 20,
              width: 20,
            }}
          />
          <TextInput
            placeholder="Nova Password"
            placeholderTextColor="#6666666"
            autoCorrect={false}
            secureTextEntry = {true}
            onChangeText={value => setNewPassword2(value)}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity>
          <Button
            title="Atualizar"
            color="#669BF7"
            onPress={() => {
              if (uname != '') {
                firestore()
                  .collection('Users')
                  .where('email', '==', uemail)
                  .get()
                  .then(querySnapShot => {
                    querySnapShot.docs[0].ref.update({
                      name: uname,
                    });
                  });
                  auth().currentUser.updateProfile({displayName: uname});
                  bool = true;
              }
              let bool = false;
              if(newpassword != '' && olddPassword != ''){
                if(newpassword == newpassword2){
                  let user = auth().currentUser;
                  let cred = auth.EmailAuthProvider.credential(email, olddPassword);
                  user.reauthenticateWithCredential(cred);
                  user.updatePassword(newpassword).then(function () {
                    firestore()
                      .collection('Users')
                      .where('email', '==', email)
                      .get()
                      .then(querySnapShot => {
                        querySnapShot.docs[0].ref.update({
                          password: newpassword,
                        });
                      });
                      bool = true;
                  }). catch(function(error){
                    bool = false;
                    Alert.alert(error.message);
                  });

                }else{
                  ToastAndroid.show("Passwords não coicidem", 3);
                }
              }
              if(bool){
                ToastAndroid.show("Perfil Atualizado", 3);
                RootNavigation.navigate("ProfileScreen");
              }
              
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
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

export default EditProfileScreen;
