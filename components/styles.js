import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    containerCamera: {
      flexGrow: 1,
    },
    camera: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    buttonContainerCamera: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 20,
      paddingHorizontal: 20,
    },
    buttonCamera: {
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
    textCamera: {
      fontSize: 18,
      color: '#000',
    },
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F0F0F0',
    },
    logoContainer: {
      backgroundColor: '#FFFFFF', 
      width: 100,
      height: 100,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    logoText: {
      fontSize: 50,
      color: '#0000FF',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      width: '80%',
      marginBottom: 10,
      margin: 10,
      borderWidth: 1,
      borderColor: '#CCCCCC',
      padding: 10,
      borderRadius: 5,
    },
    inputToOthers: {
      height: 150,
      width: '80%',
      margin: 10,
      marginBottom: 10,
      textAlignVertical: 'top',
      borderWidth: 1,
      borderColor: '#CCCCCC',
      padding: 10,
      borderRadius: 5,
    },
    button: {
      backgroundColor: '#0000FF',
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
      color: '#0000FF',
    },
    dropdown_container: {
      
      width: '80%',
      marginTop: 20,
      height:40,
      borderRadius: 5,
      color:'while',
      borderWidth: 1,
      borderColor: '#ccc',
      alignItems: 'center',
      maxWidth:300,
      
    },
    dropdown_item: {
      padding: 10,
      backgroundColor: 'gray',
      fontSize: 16,
      color:'white',
      marginHorizontal:10
    },
    containerFlatList: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    flatListContainer: {
      marginTop: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    flatListItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    flatListItemText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export default Styles;