import { FlatList, ScrollView } from 'react-native';
import { Icon } from 'react-native-paper';
import { Button, Card, Chip, Text } from '../common';
import styles from './styles';

const UserCardComponent = ({ user }) => {
  const title = `${user.first_name}${user.last_name ? ` ${user.last_name}` : ''}, ${user.age}`;

  return (
    <Card style={styles.card}>
      <FlatList
        style={styles.cardCoverList}
        horizontal
        pagingEnabled
        data={user.profile_pictures}
        renderItem={({ item }) => (
          <Card.Cover style={styles.cardCover} source={{ uri: item.file_path }} />
        )}
      />
      <Card.Title
        title={title}
        subtitle={
          <Text>
            <Icon source="map-marker-outline" size={22} /> {user.distance} meters away
          </Text>
        }
      />
      <Card.Content>
        <ScrollView
          contentContainerStyle={styles.cardContentContainer}
          horizontal
          scrollEnabled={user.tags.length >= 3}
          showsHorizontalScrollIndicator={false}
        >
          {user.tags.map((tag) => (
            <Chip key={tag.id} text={tag.name} />
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

export default UserCardComponent;
