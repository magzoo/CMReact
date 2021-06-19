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
        marginTop: 20,
        marginBottom: 20,
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
      buttonShare: {
        marginTop: 10,
        width: '60%',
        alignItems: "center"
      },
      textInput: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
        width: "70%",
        alignSelf: "center"
          
      },
      
      textInputTitle: {
        marginTop: 10,
        fontSize: 15,
        textAlign: 'center',
      },

});

export default styles;