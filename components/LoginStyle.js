import { StyleSheet, Text} from 'react-native';
  

const styles = StyleSheet.create({

    background: {
        backgroundColor: '#eba83a',
        height: '100%',
    },

    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputContainer: {
        flexDirection: 'column',
        marginTop: 60,
    },

    title: {
        fontSize: 30,
        marginTop: 50,
        color: '#000000',
    },

    inputMargin: {
        marginTop: 10,
        borderWidth: 1,
        width: 100,
        height: 15,
        backgroundColor: '#fff8d9',
        borderColor: '#eba83a',
        color: '#000000',
    },

    label: {
        fontSize: 15,
    },

    button: {
        marginTop: 30,
        color: '#bb371a',
    },

    registo: {
        color: '#fff8d9',
    },

});

module.exports = styles;