import { Icon as PaperIcon, useTheme } from 'react-native-paper';

const Icon = ({ source, size, ...rest }) => {
  const theme = useTheme();

  return <PaperIcon source={source} size={size} color={theme.colors.primary} {...rest} />;
};

export default Icon;
