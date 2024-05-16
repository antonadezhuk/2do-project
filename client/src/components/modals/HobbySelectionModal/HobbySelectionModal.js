import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FlatList } from 'react-native';
import { Portal, Divider } from 'react-native-paper';
import { discoverySettingsState, hobbiesState } from '../../../state/atoms';
import { Checkbox, List, Modal } from '../../common';

const HobbySelectionModal = ({ visible, onDismiss }) => {
  const hobbies = useRecoilValue(hobbiesState);
  const [discoverySettings, setDiscoverySettings] = useRecoilState(discoverySettingsState);

  const renderHobbySelectionItem = useCallback(
    ({ item }) => {
      const isChecked = discoverySettings.hobbies.some((hobby) => hobby.id === item.id);

      const handleHobbySelection = () => {
        setDiscoverySettings((prevSettings) => ({
          ...prevSettings,
          hobbies: isChecked
            ? prevSettings.hobbies.filter((hobby) => hobby.id !== item.id)
            : [...prevSettings.hobbies, item],
        }));
      };

      return (
        <List.Item
          title={item.name}
          right={() => (
            <Checkbox status={isChecked ? 'checked' : 'unchecked'} onPress={handleHobbySelection} />
          )}
        />
      );
    },
    [discoverySettings.hobbies, setDiscoverySettings]
  );

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss}>
        <FlatList
          ItemSeparatorComponent={() => <Divider />}
          data={hobbies}
          renderItem={renderHobbySelectionItem}
        />
      </Modal>
    </Portal>
  );
};

export default HobbySelectionModal;
