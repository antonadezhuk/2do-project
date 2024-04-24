import { View, StyleSheet } from 'react-native';
import { ActivityIndicator as PaperActivityIndicator } from 'react-native-paper';

const ActivityIndicator = ({ color, size, ...rest }) => (
  <View style={styles.container}>
    <PaperActivityIndicator color={color} size={size} {...rest} />
  </View>
);

ActivityIndicator.defaultProps = {
  size: 'large',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActivityIndicator;
