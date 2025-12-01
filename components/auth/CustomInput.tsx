import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';
import React from 'react';

interface CustomInputProps {
  label: string;
  secure?: boolean;
  onUpdateValue: (value: string) => void;
  value: string;
}

const CustomInput = ({ label, secure, onUpdateValue, value }: CustomInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={!!secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: Colors.lightForeground,
    marginBottom: 6,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 6,
    backgroundColor: Colors.lightBackgroung,
    fontSize: 18,
  },
});
