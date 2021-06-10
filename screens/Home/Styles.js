import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#33BDFF',
      },

      picker: {
        width: '100%',
        height: '10%',
        borderWidth: 15,
        borderRadius: 15,
      },

      schedule: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 350
      },

      buttonContainer: {
        flexDirection: 'row',
      },
      
      button: {
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 30,
        width: 75,
        backgroundColor: '#33BDFF',
        height: 75,
      },
      
      buttonTitle: {
        marginTop: 18,
        marginLeft: 7,
      },
});

export default styles;