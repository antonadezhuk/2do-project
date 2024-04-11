import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  card: {
    flex: 1,
    overflow: 'hidden',
  },
  cardCoverList: {
    height: '75%',
  },
  cardCover: {
    width: windowWidth - 40,
    height: '100%',
    borderRadius: 0,
  },
  cardContentContainer: {
    gap: 10,
  },
});
