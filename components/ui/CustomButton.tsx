import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import { Colors } from '../../constants/styles';

interface CustomButtonProps {
  children: ReactNode;
  onPress: () => void;
}

const CustomButton = ({ children, onPress }: CustomButtonProps) => {
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: Colors.mediumBackgroung,
  },
  pressed: {
    opacity: 0.72,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.lightForeground,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
