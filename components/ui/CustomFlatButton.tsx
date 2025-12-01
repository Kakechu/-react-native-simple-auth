import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import { Colors } from '../../constants/styles';

interface CustomFlatButtonProps {
  children: ReactNode;
  onPress: () => void;
}

const CustomFlatButton = ({ children, onPress }: CustomFlatButtonProps) => {
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default CustomFlatButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.lightForeground,
  },
});
