import CommunitySlider from '@react-native-community/slider';
import { useTheme } from 'react-native-paper';

const Slider = (props) => {
  const theme = useTheme();

  return (
    <CommunitySlider
      thumbTintColor={theme.colors.primary}
      minimumTrackTintColor={theme.colors.primary}
      maximumTrackTintColor={theme.colors.outline}
      {...props}
    />
  );
};

Slider.defaultProps = {
  step: 1,
};

export default Slider;
