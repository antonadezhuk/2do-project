import { TextInput as PaperTextInput } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';

const InputDate = ({ label, withDateFormatInLabel, render, value, onChangeText, ...rest }) => (
  <PaperTextInput
    label={withDateFormatInLabel ? `${label} (YYYY/MM/DD)` : label}
    render={(props) => (
      <TextInputMask
        {...props}
        type="datetime"
        options={{
          format: 'YYYY/MM/DD',
        }}
        maxLength={10}
        value={value}
        onChangeText={onChangeText}
      />
    )}
    value={value}
    {...rest}
  />
);

export default InputDate;
