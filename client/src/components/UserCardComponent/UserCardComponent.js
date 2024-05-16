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
          scrollEnabled={user.hobbies.length > 3}
          showsHorizontalScrollIndicator={false}
        >
          {user.hobbies.map((hobby) => (
            <Chip
              key={hobby.id}
              icon={hobby.iconName ? hobby.iconName : 'tag-heart'}
              text={hobby.name}
            />
          ))}
        </ScrollView>
      </Card.Content>
      <Card.Actions>
        <Button style={styles.button} icon="close" onPress={onSkip}>
          Skip
        </Button>
        <Button style={styles.button} icon="account-plus" onPress={onAdd}>
          Add
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardCover: {
    width: Dimensions.get('window').width - defaultStyles.screen.padding * 2,
    height: '100%',
  },
  button: {
    flex: 1,
  },
});

export default UserCardComponent;
