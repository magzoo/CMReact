import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        marginTop: 15,
      },

      listTab: {
          flexDirection: 'row',
          alignSelf: 'center',
          marginBottom: 20,


      },

      btnTab: {
          width: Dimensions.get('window').width / 4.5,
          flexDirection: 'row',
          borderWidth: 0.5,
          borderColor: '#33BDFF',
          padding: 10,
          justifyContent: 'center',
      },

      btnTabActive: {
          backgroundColor: '#33BDFF',
      },
});

export default styles;