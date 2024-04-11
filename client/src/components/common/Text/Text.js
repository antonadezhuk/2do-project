import { Text as PaperText } from 'react-native-paper';

const Text = ({ variant, children, ...rest }) => (
  <PaperText variant={variant} {...rest}>
    {children}
  </PaperText>
);

export default Text;
