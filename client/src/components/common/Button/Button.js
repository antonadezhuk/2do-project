import { Button as PaperButton } from 'react-native-paper';

const Button = ({ text, icon, onPress, ...rest }) => (
  <PaperButton icon={icon} onPress={onPress} {...rest}>
    {text}
  </PaperButton>
);

export default Button;
