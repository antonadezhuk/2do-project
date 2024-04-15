import CommunitySlider from '@react-native-community/slider';
import { useTheme } from 'react-native-paper';

const Slider = ({
  minimumValue,
  maximumValue,
  lowerLimit,
  upperLimit,
  step,
  value,
  onValueChange,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <CommunitySlider
      thumbTintColor={theme.colors.primary}
      minimumTrackTintColor={theme.colors.primary}
      maximumTrackTintColor={theme.colors.outline}
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      lowerLimit={lowerLimit}
      upperLimit={upperLimit}
      step={step}
      value={value}
      onValueChange={onValueChange}
      {...rest}
    />
  );
};

Slider.defaultProps = {
  step: 1,
};

export default Slider;
