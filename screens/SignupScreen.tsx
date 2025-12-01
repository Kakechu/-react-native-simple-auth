import { Alert } from "react-native";
import AuthenticationContent from "../components/auth/AuthenticationContent";
import { createNewUser } from "../util/authentication";

const SignupScreen = () => {
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
    } catch (error) {
      Alert.alert("An error occurred!", JSON.stringify(error));
    }
  };
  return <AuthenticationContent onAuthentication={signingUpHandler} />;
};

export default SignupScreen;
