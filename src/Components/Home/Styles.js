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
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },

      buttonView: {
        width: '30%'
      },

      buttonViewLeft: {
        width: '30%',
        marginLeft: 5,
      },
      
      buttonViewRight: {
        marginRight: 5,
        width: '30%',
      },


});

export default styles;