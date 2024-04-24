import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FlatList } from 'react-native';
import { Portal, Divider, ActivityIndicator } from 'react-native-paper';
import { discoverySettingsState, tagsState } from '../../../state/atoms';
import { Checkbox, ListItem, Modal } from '../../common';

const TagSelectionModal = ({ visible, onDismiss }) => {
  const tags = useRecoilValue(tagsState);
  const [discoverySettings, setDiscoverySettings] = useRecoilState(discoverySettingsState);

  const renderTagSelectionItem = useCallback(
    ({ item }) => {
      const isChecked = discoverySettings.tags.some((tag) => tag.id === item.id);

      const handleTagSelection = () => {
        setDiscoverySettings((prevSettings) => ({
          ...prevSettings,
          tags: isChecked
            ? prevSettings.tags.filter((tag) => tag.id !== item.id)
            : [...prevSettings.tags, item],
        }));
      };

      return (
        <ListItem
          title={item.name}
          right={() => (
            <Checkbox status={isChecked ? 'checked' : 'unchecked'} onPress={handleTagSelection} />
          )}
        />
      );
    },
    [discoverySettings.tags, setDiscoverySettings]
  );

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss}>
        <FlatList
          ItemSeparatorComponent={() => <Divider />}
          data={tags}
          renderItem={renderTagSelectionItem}
        />
      </Modal>
    </Portal>
  );
};

export default TagSelectionModal;
