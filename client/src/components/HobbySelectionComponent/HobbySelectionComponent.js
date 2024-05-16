import { useCallback } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { ScrollView, View, StyleSheet } from 'react-native';
import { hobbiesState } from '../../state/atoms';
import { ActivityIndicator, Chip, Text } from '../common';

const HobbySelectionComponent = ({ selectedHobbies, setSelectedHobbies }) => {
  const hobbiesLoadable = useRecoilValueLoadable(hobbiesState);

  const renderHobbySelectionList = useCallback(
    (hobbies) => {
      const isHobbySelected = (hobbyId) => selectedHobbies.some((h) => h.id === hobbyId);

      const handleHobbySelection = (hobby) => {
        setSelectedHobbies((prevHobbies) =>
          isHobbySelected(hobby.id)
            ? prevHobbies.filter((h) => h.id !== hobby.id)
            : [...prevHobbies, hobby]
        );
      };

      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            {hobbies.map((hobby) => (
              <Chip
                showSelectedOverlay
                showSelectedCheck={false}
                key={hobby.id}
                selected={isHobbySelected(hobby.id)}
                icon={hobby?.iconName}
                text={hobby.name}
                onPress={() => handleHobbySelection(hobby)}
              />
            ))}
          </View>
        </ScrollView>
      );
    },
    [selectedHobbies, setSelectedHobbies]
  );

  switch (hobbiesLoadable.state) {
    case 'hasValue':
      return renderHobbySelectionList(hobbiesLoadable.contents);
    case 'loading':
      return <ActivityIndicator />;
    case 'hasError':
      return <Text>Error!</Text>;
    default:
      return <Text>Unknown state!</Text>;
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});

export default HobbySelectionComponent;
