import { useState } from 'react';
import { useFormik } from 'formik';
import { View, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { ProgressBar, TouchableRipple, useTheme } from 'react-native-paper';
import { Button, Icon, Input, Select, Surface, Text } from '../../../components/common';
import { HobbySelectionComponent, ImagePickerComponent } from '../../../components';
import defaultStyles from '../../../constants/styles';

const AccountDetailsStep = ({ formik }) => (
  <View style={styles.container}>
    <Text variant="titleLarge">Let's get started</Text>
    <Text variant="bodyLarge">
      To begin, we need your email and a secure password. These will be your credentials for
      accessing your account later.
    </Text>
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
  </View>
);

const PersonalInfoStep = ({ formik }) => {
  const [genders, setGenders] = useState({
    currentValue: '',
    list: [
      { _id: '1', value: 'Male' },
      { _id: '2', value: 'Female' },
    ],
    selectedList: [],
  });

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Tell us about yourself</Text>
      <Text variant="bodyLarge">
        We'd love to know more about you. This information helps us personalize your experience.
      </Text>
      <Input.Text
        label="First name"
        value={formik.values.firstName}
        onChangeText={formik.handleChange('firstName')}
        onBlur={formik.handleBlur('firstName')}
      />
      <Input.Text
        label="Last name (optional)"
        value={formik.values.lastName}
        onChangeText={formik.handleChange('lastName')}
        onBlur={formik.handleBlur('lastName')}
      />
      <Input.Date
        withDateFormatInLabel
        label="Date of birth"
        value={formik.values.dateOfBirth}
        onChangeText={formik.handleChange('dateOfBirth')}
        onBlur={formik.handleBlur('dateOfBirth')}
      />
      <Select
        hideSearchBox
        multiEnable={false}
        label="Gender"
        arrayList={genders.list}
        selectedArrayList={genders.selectedList}
        value={genders.currentValue}
        onSelection={(value) => {
          setGenders({
            ...genders,
            currentValue: value.text,
            selectedList: value.selectedList,
          });
          formik.setFieldValue('gender', value.text.toUpperCase());
        }}
      />
    </View>
  );
};

const InterestsStep = ({ formik }) => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Share your interests</Text>
      <Text variant="bodyLarge">
        What do you love doing? Sharing your hobbies will help us connect you with like-minded
        people.
      </Text>
      <HobbySelectionComponent
        selectedHobbies={selectedHobbies}
        setSelectedHobbies={setSelectedHobbies}
      />
    </View>
  );
};

const ProfileSetupStep = () => {
  const theme = useTheme();

  const [image, setImage] = useState(null);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Almost there</Text>
      <Text variant="bodyLarge">
        Upload your profile picture to complete your profile setup. A good profile picture can make
        your profile more attractive.
      </Text>
      <ImagePickerComponent style={{ flex: 1 }} setImage={setImage}>
        <View style={[styles.imagePickerContent, { borderColor: theme.colors.outlineVariant }]}>
          {image ? (
            <Image style={styles.image} resizeMode="stretch" source={{ uri: image.uri }} />
          ) : (
            <Icon source="image-plus" size={30} color={theme.colors.outlineVariant} />
          )}
        </View>
      </ImagePickerComponent>
    </View>
  );
};

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      location: '',
      hobbyIds: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const steps = [
    <AccountDetailsStep formik={formik} />,
    <PersonalInfoStep formik={formik} />,
    <InterestsStep formik={formik} />,
    <ProfileSetupStep formik={formik} />,
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleContinueOrSubmit = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      formik.handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Surface style={styles.container}>
        <ProgressBar progress={(currentStep + 1) / steps.length} />
        {steps[currentStep]}
        <View style={styles.buttonContainer}>
          {currentStep > 0 && (
            <Button
              style={styles.button}
              uppercase
              mode="outlined"
              icon="arrow-left"
              onPress={handleBack}
            >
              Back
            </Button>
          )}
          <Button
            style={styles.button}
            uppercase
            mode="contained"
            icon={currentStep < steps.length - 1 ? 'arrow-right' : 'check'}
            iconPosition="right"
            onPress={handleContinueOrSubmit}
          >
            {currentStep < steps.length - 1 ? 'Continue' : 'Submit'}
          </Button>
        </View>
      </Surface>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...defaultStyles.screen,
  },
  container: {
    flex: 1,
    gap: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
  },
  imagePickerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default SignUp;
