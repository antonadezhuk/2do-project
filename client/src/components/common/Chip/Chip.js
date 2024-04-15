import { Chip as PaperChip } from 'react-native-paper';

const Chip = ({ text, icon, closeIcon, onPress, onClose, ...rest }) => (
  <PaperChip icon={icon} closeIcon={closeIcon} onPress={onPress} onClose={onClose} {...rest}>
    {text}
  </PaperChip>
);

export default Chip;
