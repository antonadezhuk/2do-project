import { FlatList, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Button, Card, Chip } from '../common';
import defaultStyles from '../../constants/styles';

const UserCardComponent = ({ user, onAdd, onSkip }) => {
  const title = `${user.first_name}${user.last_name ? ` ${user.last_name}` : ''}, ${user.age}`;

  return (
    <Card>
      <FlatList
        style={{ height: '75%' }}
        horizontal
        pagingEnabled
        data={user.profile_pictures}
        renderItem={({ item }) => (
          <Card.Cover style={styles.cardCover} source={{ uri: item.file_path }} />
        )}
      />
      <Card.Title title={title} subtitle={`${user.distance} meters away`} />
      <Card.Content>
        <ScrollView
          contentContainerStyle={{ gap: 10 }}
          horizontal
          scrollEnabled={user.tags.length >= 3}
          showsHorizontalScrollIndicator={false}
        >
          {user.tags.map((tag) => (
            <Chip key={tag.id} icon="tag-heart-outline" text={tag.name} />
          ))}
        </ScrollView>
      </Card.Content>
      <Card.Actions style={styles.cardActions}>
        <Button style={styles.button} text="Skip" icon="close" onPress={onSkip} />
        <Button style={styles.button} text="Add" icon="account-plus" onPress={onAdd} />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardCover: {
    width: Dimensions.get('window').width - defaultStyles.screenContainer.padding * 2,
    height: '100%',
  },
  cardActions: {
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
  },
});

export default UserCardComponent;
