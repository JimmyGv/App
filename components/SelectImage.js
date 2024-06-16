import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Styles from './styles';
import ButtonComponent from './button';

const SelectImage = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const pickImageFromGallery = async () => {
    if (hasPermission === false) {
      alert('Permiso denegado para acceder a la galería.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled && result.assets && result.assets.length > 0) {
      setCapturedImage(result.assets[0].uri);
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
      <ButtonComponent onPress={pickImageFromGallery} txtBtn={"Seleccionar de la galería"} />
      {capturedImage && <Image source={{ uri: capturedImage }} style={{ width: 100, height: 100, marginTop: 20 }} />}
    </View>
  );
};

export default SelectImage;
