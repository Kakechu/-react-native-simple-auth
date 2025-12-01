import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../ui/CustomButton';
import CustomInput from './CustomInput';

export interface AuthCredentials {
  email: string;
  password: string;
  confirmPassword?: string;
}

interface AuthenticationFormProps {
  isLoggedIn?: boolean;
  onSubmit: (credentials: AuthCredentials) => void;
}

function AuthenticationForm({ isLoggedIn, onSubmit }: AuthenticationFormProps) {
  const [filledInEmail, setFilledInEmail] = useState('');
  const [filledInPassword, setFilledInPassword] = useState('');
  const [filledInConfirmPassword, setFilledInConfirmPassword] = useState('');

  function updateInputValueHandler(inputType: 'email' | 'password' | 'confirmPassword', FilledInValue: string) {
    switch (inputType) {
      case 'email':
        setFilledInEmail(FilledInValue);
        break;
      case 'password':
        setFilledInPassword(FilledInValue);
        break;
      case 'confirmPassword':
        setFilledInConfirmPassword(FilledInValue);
        break;
    }
  }

  const submitHandler = () => {
    onSubmit({
      email: filledInEmail,
      password: filledInPassword,
      confirmPassword: filledInConfirmPassword,
    });
  };

  return (
    <View style={styles.form}>
      <View>
        <CustomInput label="Email Address" onUpdateValue={updateInputValueHandler.bind(null, 'email')} value={filledInEmail} />
        <CustomInput label="Password" onUpdateValue={updateInputValueHandler.bind(null, 'password')} secure value={filledInPassword} />
        {!isLoggedIn && (
          <CustomInput
            label="Confirm Password"
            onUpdateValue={updateInputValueHandler.bind(null, 'confirmPassword')}
            secure
            value={filledInConfirmPassword}
          />
        )}
        <View style={styles.button}>
          <CustomButton onPress={submitHandler}>{isLoggedIn ? 'Log In' : 'Sign Up'}</CustomButton>
        </View>
      </View>
    </View>
  );
}

export default AuthenticationForm;

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
  },
  form: {},
});
