import { View, StyleSheet } from 'react-native';
import { ActivityIndicator as PaperActivityIndicator } from 'react-native-paper';

const ActivityIndicator = (props) => (
  <View style={styles.container}>
    <PaperActivityIndicator {...props} />
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
