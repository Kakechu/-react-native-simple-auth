import { Alert } from "react-native";
import AuthenticationContent from "../components/auth/AuthenticationContent";
import { login } from "../util/authentication";

const LoginScreen = () => {
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
    } catch (error) {
      Alert.alert("An error occurred!", JSON.stringify(error));
    }
  };
  return <AuthenticationContent isLoggedIn onAuthentication={loginHandler} />;
};

export default LoginScreen;
