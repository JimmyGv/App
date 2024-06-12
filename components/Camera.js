import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import Styles from './styles';
import ButtonComponent from './button';

const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri);
    }
  };

  const pickImageFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
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
      // Usamos el primer elemento de assets ya que solo se selecciona una imagen
      setCapturedImage(result.assets[0].uri);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No se ha concedido acceso a la cámara</Text>;
  }

  return (
    <View style={Styles.containerCamera}>
      <Camera style={Styles.camera} type={type} ref={cameraRef}>
        <View style={Styles.buttonContainerCamera}>
            <ButtonComponent onPress={takePicture} txtBtn={"Tomar foto"}/>
            <ButtonComponent onPress={() => setType(
                type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            )} txtBtn={"Cambiar cámara"}/>
        </View>
      </Camera>
      {capturedImage && <Image source={{ uri: capturedImage }} style={{ flex: 1 }} />}
      <ButtonComponent onPress={pickImageFromGallery} txtBtn={"Seleccionar de la galería"}/>
    </View>
  );
};

export default CameraComponent;
