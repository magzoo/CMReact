import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';


function RegisterScreen(props){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState(null);


    function insertUserFireStore(){
        firestore().collection('Users').add({
            "name": name,
            "email": email,
            "password":password
        });

        firestore().collection('Schedules').add({
            "name":"Geral",
            "userEmail": email,
        });
    }

    function handleSignUp(){
        auth()
            .createUserWithEmailAndPassword(email,password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: name
                });
            })
    }

    function insertEverything(){
        insertUserFireStore();
        handleSignUp();
    }

        return(
            <View style={styles.container}>
                <View style = {styles.errorMessage}>
                    {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
                </View>

                <View style = {styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Nome Completo</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize = "none"
                            onChangeText={name => setName(name)}
                            value={name}
                        ></TextInput>
                    </View>
                </View>

                <View style = {{marginTop: 32}}>
                    <View>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize = "none"
                            onChangeText={email => setEmail(email)}
                            value={email}
                        ></TextInput>
                    </View>
                </View>

                <View style = {{marginTop: 32}}>
                    <View>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry 
                            autoCapitalize = "none"
                            onChangeText={password => setPassword(password)}
                            value={password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress= {insertEverything}>
                    <Text style={{marginTop: 5,color: "#FFF", fontWeight: "500"}}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{alignSelf: "center", marginTop: 32}}
                    onPress={() => props.navigation.navigate("Register")}
                />
            </View>
        );
}

const styles = StyleSheet.create({
    container: {   
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign:"center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 40,
        marginHorizontal: 30
    },
    inputTittle: {
        color: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#33BDFF",
        borderRadius: 4,
        height: 30,
        width: 80,
        alignItems: "center",
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor:'#33BDFF',
        marginBottom: 20,
    },
});


export default RegisterScreen;