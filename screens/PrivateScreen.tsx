import { StyleSheet, Text, View } from 'react-native';

const PrivateScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome to private contents!</Text>
      <Text>You have logged in successfully!</Text>
    </View>
  );
};

export default PrivateScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});