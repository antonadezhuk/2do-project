import { Text as PaperText } from 'react-native-paper';

const Text = ({ children, ...rest }) => <PaperText {...rest}>{children}</PaperText>;

Text.defaultProps = {
  variant: 'titleMedium',
};

export default Text;
