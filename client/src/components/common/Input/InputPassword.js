import { useState } from 'react';
import { TextInput as PaperTextInput } from 'react-native-paper';

const InputPassword = ({ secureTextEntry, right, ...rest }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <PaperTextInput
      secureTextEntry={!isPasswordVisible}
      right={
        <PaperTextInput.Icon
          icon={isPasswordVisible ? 'eye-off' : 'eye'}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        />
      }
      {...rest}
    />
  );
};

export default InputPassword;
