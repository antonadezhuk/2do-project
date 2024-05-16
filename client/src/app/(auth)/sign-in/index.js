import { Link } from 'expo-router';
import { useTheme } from 'react-native-paper';
import { useFormik } from 'formik';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Input, Surface, Text } from '../../../components/common';
import defaultStyles from '../../../constants/styles';

const SignIn = () => {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <SafeAreaView style={styles.screen}>
      <Surface style={styles.surface}>
        <Text variant="titleLarge">Sign in</Text>
        <Input.Text
          label="Email"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
        />
        <Input.Password
          label="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
        />
        <Button uppercase mode="contained" onPress={formik.handleSubmit}>
          Sign in
        </Button>
        <Text style={{ textAlign: 'center' }} variant="bodyLarge">
          Don't have an account?{' '}
          <Link style={{ color: theme.colors.primary }} href="/sign-up">
            Sign up
          </Link>
        </Text>
      </Surface>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...defaultStyles.screen,
    justifyContent: 'center',
  },
  surface: {
    paddingVertical: 40,
    gap: 20,
  },
});

export default SignIn;
