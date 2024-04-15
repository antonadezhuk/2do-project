import { FlatList, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Button, Card, Chip } from '../common';

const UserCardComponent = ({ user }) => {
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
      <Card.Actions>
        <Button text="Skip" icon="close" onPress={() => {}} />
        <Button text="Add to connections" icon="account-plus" onPress={() => {}} />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardCover: {
    width: Dimensions.get('window').width - 40,
    height: '100%',
  },
});

export default UserCardComponent;
