import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth'

export default class LoadingScreen extends React.Component{
    state = {
        email: "",
        password: "",
        errorMessage: null
    }

    handleLogin = () => {
        const {email, password} = this.state
        auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({errorMessage: error.message}))
    }

    render(){
        return(
            <View style={styles.container}>
                <View style = {styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
                <View style = {styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize = "none"
                            onChangeText={email => this.setState({email})}
                            value={this.state.email}
                        ></TextInput>
                    </View>
                </View>

                <View style = {{marginTop: 32}}>
                <Text style={styles.inputTitle}>Password</Text>
                    <View>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry 
                            autoCapitalize = "none"
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{marginTop: 5,color: "#FFF", fontWeight: "500"}}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{alignSelf: "center", marginTop: 32}}
                    onPress={() => this.props.navigation.navigate("Register")}
                >
                    <Text style={{color: "#414959", fontSize: 13}}>
                        Dont have an account? <Text style={{color: "#33BDFF", fontWeight: "500"}}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
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
        marginHorizontal: 30,

    },
    inputTitle: {
        color: "#8A8F9E",
        height: 40,
        fontSize: 15,
        color: "#161F3D",
        textAlign: 'center'
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
        marginBottom: 5,
        textAlign: 'center'
    },
});