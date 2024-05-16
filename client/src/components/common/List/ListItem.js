import { List as PaperList } from 'react-native-paper';

const ListItem = ({ title, ...rest }) => <PaperList.Item title={title} {...rest} />;

export default ListItem;
