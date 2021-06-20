import 'react-native-gesture-handler';
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
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
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

  return (
    <View style={styles.container}>
      <View style={{margin: 20}}>
      <Image
            source={require('../../Assets/images/profile.png')}
            size={35}
            style={styles.image}
          />
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
            placeholderTextColor="#666666"
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
            placeholderTextColor="#666666"
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
            placeholderTextColor="#666666"
            autoCorrect={false}
            secureTextEntry={true}
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
            placeholderTextColor="#666666"
            autoCorrect={false}
            secureTextEntry={true}
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
            placeholderTextColor="#666666"
            autoCorrect={false}
            secureTextEntry={true}
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
              if (newpassword != '' && olddPassword != '') {
                if (newpassword == newpassword2) {
                  let user = auth().currentUser;
                  let cred = auth.EmailAuthProvider.credential(
                    email,
                    olddPassword,
                  );
                  user.reauthenticateWithCredential(cred);
                  user
                    .updatePassword(newpassword)
                    .then(function () {
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
                    })
                    .catch(function (error) {
                      bool = false;
                      Alert.alert(error.message);
                    });
                } else {
                  ToastAndroid.show('Passwords não coicidem', 3);
                }
              }
              if (bool) {
                ToastAndroid.show('Perfil Atualizado', 3);
              }
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.userBtnWrapper}>
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => {
            auth().signOut();
            RootNavigation.navigate('Login');
          }}>
          <Text style={styles.userBtnTxt}>Logout</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => {
            auth().currentUser.delete();
            RootNavigation.navigate('Login');
          }}>
          <Text style={styles.userBtnTxt}>Eliminar Conta</Text>
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
  image:{
    width: 100,
    height: 100,
    alignSelf: "center",
    paddingHorizontal: 30
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

export default EditProfileScreen;
