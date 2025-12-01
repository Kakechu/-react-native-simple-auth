import React, { useContext } from "react";
import { Alert } from "react-native";
import AuthenticationContent from "../components/auth/AuthenticationContent";
import { login } from "../util/authentication";
import { AuthenticationContext } from "../store/AuthenticationContext";

const LoginScreen = () => {
  const authenticationContext = useContext(AuthenticationContext);

  const loginHandler = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await login(email, password);
      Alert.alert("response", JSON.stringify(response));
      authenticationContext.authenticate(response.idToken);
    } catch (error) {
      Alert.alert("An error occurred!", JSON.stringify(error));
    }
  };
  return <AuthenticationContent isLoggedIn onAuthentication={loginHandler} />;
};

export default LoginScreen;
