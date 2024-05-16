import { TouchableRipple as PaperTouchableRipple } from 'react-native-paper';

const Touchable = ({ children, ...rest }) => (
  <PaperTouchableRipple borderless {...rest}>
    {children}
  </PaperTouchableRipple>
);

export default Touchable;
