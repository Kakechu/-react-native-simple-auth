import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import CustomFlatButton from '../ui/CustomFlatButton';
import AuthenticationForm, { AuthCredentials } from './AuthenticationForm';
import { Colors } from '../../constants/styles';

interface AuthenticationContentProps {
  isLoggedIn?: boolean;
}

const AuthenticationContent = ({ isLoggedIn, onAuthentication }: AuthenticationContentProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const authencationModeHandler = () => {
    if (isLoggedIn) {
      navigation.replace('Signup');
    } else {
      navigation.replace('Login');
    }
  };

  const submitHandler = (credentials: AuthCredentials) => {
    let { email, password } = credentials;
    email = email.trim();
    password = password.trim();
    onAuthentication({ email, password });
  };

  return (
    <View style={styles.authenticationContent}>
      <AuthenticationForm isLoggedIn={!!isLoggedIn} onSubmit={submitHandler} />
      <View style={styles.button}>
        <CustomFlatButton onPress={authencationModeHandler}>
          {isLoggedIn ? 'Create user' : 'Log in'}
        </CustomFlatButton>
      </View>
    </View>
  );
};

export default AuthenticationContent;

const styles = StyleSheet.create({
  authenticationContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    backgroundColor: Colors.darkBackgroung,
  },
  button: {
    marginTop: 8,
  },
});
