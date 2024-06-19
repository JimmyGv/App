import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Styles from '../components/styles';
import client from '../src/Application/client';
import { useLoggin } from '../src/uses-cases/SendEmail';
import SelectImage from '../components/SelectImage';
import ButtonComponent from '../components/button';
import { decode } from 'base-64'; // Importa la función decode desde base-64

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('');
  }, 2500);
};

const HomeScreen = () => {
  const { setIsLoggedIn, profile } = useLoggin();
  const [error, setError] = useState('');
  const [updateUser, setUpdateUser] = useState({
    name: profile.name,
    email: profile.email,
    avatar: profile.avatar || null,
  });

  const handleSave = async () => {
    if (!updateUser.avatar) {
      updateError('Please select an avatar', setError);
    } else {
      try {
        // Decodifica la URI base64 y conviértela en un blob
        const response = await fetch(updateUser.avatar);
        const blob = await response.blob();

        // Crea un objeto de archivo (File) a partir del blob
        const file = new File([blob], 'avatar.png', { type: 'image/png' });

        // Crea FormData y agrega el archivo
        const formData = new FormData();
        formData.append('profile', file);

        // Realiza la petición POST al backend
        const res = await client.post('/users/upload-profile', formData, {
          headers: {
            'Authorization': `Bearer ${profile.token}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        if (res.data.success) {
          updateError('The profile photo was updated successfully', setError);
          // Actualiza el estado del usuario si es necesario
        }
      } catch (error) {
        updateError('Unexpected error: ' + error.message, setError);
      }
    }
  };  

  const handleImageTaken = (value) => {
    setUpdateUser({ ...updateUser, avatar: value });
    console.log(value)
  };

  return (
    <View style={Styles.container}>
      <Text style={styles.welcomeText}>Welcome {profile.name}</Text>
      {profile.avatar ? (
        <Image source={{ uri: updateUser.avatar }} style={styles.avatarImage} />
      ) : (
         <Text>No avatar available</Text>
      )}
      <SelectImage onImageTaken={handleImageTaken} />
      <Text style={styles.emailText}>Email {profile.email}</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <ButtonComponent onPress={handleSave} txtBtn={'Save profile photo'} />
      <ButtonComponent onPress={() => setIsLoggedIn(false)} txtBtn={'Log Out'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 14,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  emailText: {
    textAlign: 'center',
    fontSize: 14,
  },
  errorText: {
    color: 'blue',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default HomeScreen;

