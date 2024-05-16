import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { View } from 'react-native';
import { Portal } from 'react-native-paper';
import { Button, Dialog, Text, Touchable } from '../common';
import defaultStyles from '../../constants/styles';

const ImagePickerComponent = ({ style, setImage, children }) => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const defaultImagePickerOptions = {
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [3, 4],
    quality: 1,
  };

  const handleImageSelection = async (useCamera = false) => {
    setIsDialogVisible(false);

    let result;

    if (useCamera) {
      const { status } = ImagePicker.requestCameraPermissionsAsync();
      if (status !== ImagePicker.PermissionStatus.GRANTED) {
        // TODO
      }

      result = await ImagePicker.launchCameraAsync(defaultImagePickerOptions);
    } else {
      result = await ImagePicker.launchImageLibraryAsync(defaultImagePickerOptions);
    }

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  return (
    <View style={style}>
      <Portal>
        <Dialog visible={isDialogVisible} onDismiss={() => setIsDialogVisible(false)}>
          <Dialog.Title>
            <Text variant="titleLarge">
              Do you want to select an image from the gallery or take a photo?
            </Text>
          </Dialog.Title>
          <Dialog.Content style={[defaultStyles.row, { justifyContent: 'space-around' }]}>
            <Button uppercase icon="folder-image" onPress={() => handleImageSelection(false)}>
              Gallery
            </Button>
            <Button uppercase icon="camera" onPress={() => handleImageSelection(true)}>
              Camera
            </Button>
          </Dialog.Content>
        </Dialog>
      </Portal>
      <Touchable style={{ flex: 1 }} onPress={() => setIsDialogVisible(true)}>
        {children}
      </Touchable>
    </View>
  );
};

export default ImagePickerComponent;
