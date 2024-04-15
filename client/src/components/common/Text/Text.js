import { Text as PaperText } from 'react-native-paper';

const Text = ({ variant, children, ...rest }) => (
  <PaperText variant={variant} {...rest}>
    {children}
  </PaperText>
);

Text.defaultProps = {
  variant: 'titleMedium',
};

export default Text;
