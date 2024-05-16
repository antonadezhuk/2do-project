import { Button as PaperButton } from 'react-native-paper';

const Button = ({ iconPosition, children, ...rest }) => (
  <PaperButton
    contentStyle={{ flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row' }}
    {...rest}
  >
    {children}
  </PaperButton>
);

export default Button;
