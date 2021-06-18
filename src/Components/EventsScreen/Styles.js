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
      buttonTitle: {
        marginTop: 18,
        marginLeft: 7,
      },

      backButton: {
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 30,
        width: 90,
        backgroundColor: '#33BDFF',
        height: 45,
      },
      backButtonContainer: {
        borderColor: '#000',
        borderWidth: 2,
      },
      backButtonTitle:{
        fontSize: 18,
        marginTop: 18,
      }
});

export default styles;