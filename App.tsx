import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import PrivateScreen from "./screens/PrivateScreen";
import { Colors } from "./constants/styles";
import AuthenticationContextProvider from "./store/AuthenticationContext";

const Stack = createNativeStackNavigator();

const PublicStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.mediumBackgroung },
        headerTintColor: Colors.lightForeground,
        contentStyle: { backgroundColor: Colors.lightBackgroung },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const PrivateStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.mediumBackgroung },
        headerTintColor: Colors.lightForeground,
        contentStyle: { backgroundColor: Colors.lightBackgroung },
      }}
    >
      <Stack.Screen name="Welcome" component={PrivateScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <AuthenticationContextProvider>
      <NavigationContainer>
        <PublicStack />
      </NavigationContainer>
    </AuthenticationContextProvider>
  );
};

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
};

export default App;
