import { Chip as PaperChip } from 'react-native-paper';

const Chip = ({ text, icon, disabled, onPress, ...rest }) => (
  <PaperChip icon={icon} onPress={onPress} disabled={disabled} {...rest}>
    {text}
  </PaperChip>
);

export default Chip;
