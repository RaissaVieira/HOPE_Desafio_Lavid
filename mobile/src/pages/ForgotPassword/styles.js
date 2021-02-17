import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      paddingHorizontal: 20, 
      paddingVertical: 20, 
      alignItems: 'center',
    },
    text: {
      color: '#000000',
      fontFamily: 'Roboto_400Regular',
      marginBottom: 20,      
    },
    button: {
      backgroundColor:'#000000',
      borderRadius: 6,
      borderStyle: "solid",
      color: "pink",
      width: "100%",
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
      marginHorizontal: 10,
      marginVertical: 20,
    },
    textButton: {
      color: '#FFF',
      fontFamily: 'Roboto_400Regular'
    },
    input: {
      height: 54,
      backgroundColor: '#FFF',
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: '#000000',
      justifyContent: 'flex-start',
      marginTop: 4,
      marginBottom: 5,
      width: "100%",
      paddingHorizontal: 10,
    }
});

export default styles;