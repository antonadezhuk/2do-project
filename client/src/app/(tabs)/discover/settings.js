import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { View, ScrollView, StyleSheet } from 'react-native';
import { discoverySettingsState, tagsState } from '../../../state/atoms';
import { Text, Slider, Chip, Surface, Switch, ActivityIndicator } from '../../../components/common';
import { TagSelectionModal } from '../../../components/modals';
import { fetchTags } from '../../../api/tagAPI';
import defaultStyles from '../../../constants/styles';

const Settings = () => {
  const [discoverySettings, setDiscoverySettings] = useRecoilState(discoverySettingsState);
  const [tags, setTags] = useRecoilState(tagsState);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (tags.length === 0) {
      setLoading(true);

      fetchTags()
        .then((data) => setTags(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [setTags, tags.length]);

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

  const removeTag = (id) => {
    setDiscoverySettings((prevSettings) => ({
      ...prevSettings,
      tags: prevSettings.tags.filter((tag) => tag.id !== id),
    }));
  };

  return (
    <ScrollView
      contentContainerStyle={defaultStyles.scrollScreenContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.section}>
        <View style={styles.row}>
          <Text>Show me:</Text>
          <Text>
            {discoverySettings.gender.charAt(0).toUpperCase() + discoverySettings.gender.slice(1)}
          </Text>
        </View>
        <Surface style={{ paddingVertical: 0 }}>
          <View style={styles.row}>
            <Text variant="bodyMedium">Men</Text>
            <Switch
              value={discoverySettings.gender === 'men' || discoverySettings.gender === 'all'}
              onValueChange={() => toggleGender('men')}
            />
          </View>
          <View style={styles.row}>
            <Text variant="bodyMedium">Women</Text>
            <Switch
              value={discoverySettings.gender === 'women' || discoverySettings.gender === 'all'}
              onValueChange={() => toggleGender('women')}
            />
          </View>
        </Surface>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
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
        <View style={styles.row}>
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
        <View style={styles.row}>
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
        <Text>Tags:</Text>
        <Surface style={styles.wrap}>
          {discoverySettings.tags.map((tag) => (
            <Chip
              key={tag.id}
              icon="tag-outline"
              text={tag.name}
              closeIcon="close"
              onClose={() => removeTag(tag.id)}
            />
          ))}
          <Chip icon="tag-plus-outline" text="More..." onPress={() => setModalVisible(true)} />
          <TagSelectionModal visible={modalVisible} onDismiss={() => setModalVisible(false)} />
        </Surface>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    gap: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});

export default Settings;
