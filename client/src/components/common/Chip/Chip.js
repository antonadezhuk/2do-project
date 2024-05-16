import { Chip as PaperChip } from 'react-native-paper';

const Chip = ({ text, children, ...rest }) => <PaperChip {...rest}>{text || children}</PaperChip>;

export default Chip;
