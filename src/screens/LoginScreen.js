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
                        <Text style={styles.inputTitle}>Email Adress</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize = "none"
                            onChangeText={email => this.setState({email})}
                            value={this.state.email}
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
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{alignSelf: "center", marginTop: 32}}
                    onPress={() => this.props.navigation.navigate("Register")}
                >
                    <Text style={{color: "#414959", fontSize: 13}}>
                        Dont have an account? <Text style={{color: "#E9446A", fontWeight: "500"}}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{alignSelf: "center", marginTop: 32}}
                    onPress={() => this.props.navigation.navigate("Profile")}
                >
                    <Text style={{color: "#414959", fontSize: 13}}>
                        TEST PAGE PERFIL<Text style={{color: "#E9446A", fontWeight: "500"}}>PERFIL</Text>
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
    from: {
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
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
    }
});