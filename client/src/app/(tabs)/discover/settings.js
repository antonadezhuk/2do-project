import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { View, ScrollView, StyleSheet } from 'react-native';
import { discoverySettingsState, hobbiesState } from '../../../state/atoms';
import { Text, Slider, Chip, Surface, Switch, ActivityIndicator } from '../../../components/common';
import { HobbySelectionModal } from '../../../components/modals';
import { fetchHobbies } from '../../../api/hobbyAPI';
import defaultStyles from '../../../constants/styles';

const Settings = () => {
  const [discoverySettings, setDiscoverySettings] = useRecoilState(discoverySettingsState);
  const [hobbies, setHobbies] = useRecoilState(hobbiesState);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (hobbies.length === 0) {
      setLoading(true);

      fetchHobbies()
        .then((data) => setHobbies(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [setHobbies, hobbies.length]);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const toggleGender = (gender) => {
    const oppositeGender = gender === 'men' ? 'women' : 'men';

    setDiscoverySettings((prevSettings) => ({
      ...prevSettings,
      gender:
        prevSettings.gender === gender || prevSettings.gender === 'all' ? oppositeGender : 'all',
    }));
  };

  const handleDistanceChange = (newValue) => {
    setDiscoverySettings((prevSettings) => ({
      ...prevSettings,
      distance: newValue,
    }));
  };

  const handleMinimumAgeChange = (newValue) => {
    setDiscoverySettings((prevSettings) => ({
      ...prevSettings,
      minimumAge: newValue,
      maximumAge: newValue > prevSettings.maximumAge ? newValue : prevSettings.maximumAge,
    }));
  };

  const handleMaximumAgeChange = (newValue) => {
    setDiscoverySettings((prevSettings) => ({
      ...prevSettings,
      maximumAge: newValue,
    }));
  };

  const removeHobby = (id) => {
    setDiscoverySettings((prevSettings) => ({
      ...prevSettings,
      hobbies: prevSettings.hobbies.filter((hobby) => hobby.id !== id),
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <View style={defaultStyles.row}>
          <Text>Show me:</Text>
          <Text>
            {discoverySettings.gender.charAt(0).toUpperCase() + discoverySettings.gender.slice(1)}
          </Text>
        </View>
        <Surface style={{ paddingVertical: 0 }}>
          <View style={defaultStyles.row}>
            <Text variant="bodyMedium">Men</Text>
            <Switch
              value={discoverySettings.gender === 'men' || discoverySettings.gender === 'all'}
              onValueChange={() => toggleGender('men')}
            />
          </View>
          <View style={defaultStyles.row}>
            <Text variant="bodyMedium">Women</Text>
            <Switch
              value={discoverySettings.gender === 'women' || discoverySettings.gender === 'all'}
              onValueChange={() => toggleGender('women')}
            />
          </View>
        </Surface>
      </View>
      <View style={styles.section}>
        <View style={defaultStyles.row}>
          <Text>Search distance:</Text>
          <Text>{discoverySettings.distance} km</Text>
        </View>
        <Surface>
          <Slider
            minimumValue={0}
            lowerLimit={1}
            maximumValue={100}
            value={discoverySettings.distance}
            onValueChange={handleDistanceChange}
          />
        </Surface>
      </View>
      <View style={styles.section}>
        <View style={defaultStyles.row}>
          <Text>Minimum age:</Text>
          <Text>{discoverySettings.minimumAge} years</Text>
        </View>
        <Surface>
          <Slider
            minimumValue={0}
            lowerLimit={16}
            maximumValue={100}
            value={discoverySettings.minimumAge}
            onValueChange={handleMinimumAgeChange}
          />
        </Surface>
      </View>
      <View style={styles.section}>
        <View style={defaultStyles.row}>
          <Text>Maximum age:</Text>
          <Text>{discoverySettings.maximumAge} years</Text>
        </View>
        <Surface>
          <Slider
            minimumValue={0}
            lowerLimit={discoverySettings.minimumAge}
            maximumValue={100}
            value={discoverySettings.maximumAge}
            onValueChange={handleMaximumAgeChange}
          />
        </Surface>
      </View>
      <View style={styles.section}>
        <Text>Hobbies:</Text>
        <Surface style={styles.wrap}>
          {discoverySettings.hobbies.map((hobby) => (
            <Chip
              key={hobby.id}
              icon={hobby.iconName ? hobby.iconName : 'tag-heart'}
              text={hobby.name}
              closeIcon="close"
              onClose={() => removeHobby(hobby.id)}
            />
          ))}
          <Chip icon="tag-plus-outline" text="More..." onPress={() => setModalVisible(true)} />
          <HobbySelectionModal visible={modalVisible} onDismiss={() => setModalVisible(false)} />
        </Surface>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: defaultStyles.screen.padding,
    gap: 15,
  },
  section: {
    gap: 5,
  },
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});

export default Settings;
