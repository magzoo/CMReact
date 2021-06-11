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
});

export default styles;