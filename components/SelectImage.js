import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Styles from './styles';

const SelectImage = ({ onImageTaken }) => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const pickImageFromGallery = async () => {
    if (hasPermission === false) {
      alert('Denied permission to access the files.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled && result.assets && result.assets.length > 0) {
      onImageTaken(result.assets[0].uri);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No se ha concedido acceso a la galería</Text>;
  }

  return (
    <View style={Styles.containerCamera}>
      <Button style={Styles.button} title="Select an image" onPress={pickImageFromGallery} />
    </View>
  );
};

export default SelectImage;
