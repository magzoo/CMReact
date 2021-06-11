import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      titleContainer: {
        alignItems: 'center',
        backgroundColor: '#33BDFF'
      },

      nameHour:{
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

      textMarginLeft: {
        marginLeft: 10,
      },

      textMarginRight: {
        marginRight: 10,
      },

      buttonEventContainer:{
        borderColor: '#33BDFF',
        borderWidth: 2,
        backgroundColor: '#ffffff',
      },

      eventContainer:{
        marginTop: 10,
      },

      title: {
        fontSize: 18,
        fontWeight: 'bold',
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