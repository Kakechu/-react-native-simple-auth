import React, { useContext } from "react";
import { Alert } from "react-native";
import AuthenticationContent from "../components/auth/AuthenticationContent";
import { createNewUser } from "../util/authentication";
import { AuthenticationContext } from "../store/AuthenticationContext";

const SignupScreen = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const signingUpHandler = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await createNewUser(email, password);
      Alert.alert("response", JSON.stringify(response));
      authenticationContext.authenticate(response.idToken);
    } catch (error) {
      Alert.alert("An error occurred!", JSON.stringify(error));
    }
  };
  return <AuthenticationContent onAuthentication={signingUpHandler} />;
};

export default SignupScreen;
