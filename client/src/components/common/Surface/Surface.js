import { Surface as PaperSurface } from 'react-native-paper';

const Surface = ({ style, children, ...rest }) => (
  <PaperSurface style={[{ padding: 20, borderRadius: 10 }, style]} {...rest}>
    {children}
  </PaperSurface>
);

export default Surface;
