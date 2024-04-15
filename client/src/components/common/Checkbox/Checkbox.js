import { Checkbox as PaperCheckbox } from 'react-native-paper';

const Checkbox = ({ status, disabled, onPress, ...rest }) => (
  <PaperCheckbox status={status} disabled={disabled} onPress={onPress} {...rest} />
);

export default Checkbox;
