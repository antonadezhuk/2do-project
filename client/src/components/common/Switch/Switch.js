import { Switch as PaperSwitch } from 'react-native-paper';

const Switch = ({ disabled, value, onValueChange, ...rest }) => (
  <PaperSwitch disabled={disabled} value={value} onValueChange={onValueChange} {...rest} />
);

export default Switch;
