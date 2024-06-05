import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F0F0F0', // Ajusta este color al de tu fondo
    },
    logoContainer: {
      backgroundColor: '#FFFFFF', // Ajusta este color al de tu logo
      width: 100,
      height: 100,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    logoText: {
      fontSize: 50,
      color: '#0000FF', // Ajusta este color al de tu logo
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 50,
      width: '80%',
      margin: 10,
      borderWidth: 1,
      borderColor: '#CCCCCC',
      padding: 10,
      borderRadius: 5,
    },
    button: {
      backgroundColor: '#0000FF', // Ajusta este color al del botón en la imagen
      padding: 15,
      borderRadius: 5,
      width: '80%',
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    forgotPassword: {
      marginTop: 15,
      color: '#0000FF', // Ajusta este color al de tu enlace
    },
    dropdown_container: {
      width: '100%',
      margin: 10,
      alignItems: 'center'
      
    },
  });

  export default Styles;