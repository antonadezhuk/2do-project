import { Checkbox as PaperCheckbox } from 'react-native-paper';

const Checkbox = ({ status, ...rest }) => <PaperCheckbox status={status} {...rest} />;

export default Checkbox;
