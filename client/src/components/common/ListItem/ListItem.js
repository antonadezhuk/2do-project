import { List as PaperList } from 'react-native-paper';

const ListItem = ({ title, description, left, right, onPress, ...rest }) => (
  <PaperList.Item
    title={title}
    description={description}
    left={left}
    right={right}
    onPress={onPress}
    {...rest}
  />
);

export default ListItem;
