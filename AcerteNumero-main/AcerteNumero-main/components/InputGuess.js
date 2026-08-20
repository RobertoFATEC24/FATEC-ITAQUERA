import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export default function InputPalpite({ value, onChangeText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Digite um número (0-9)"
        placeholderTextColor="#94A3B8"
        keyboardType="numeric"
        maxLength={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15
  },

  input: {
    backgroundColor: '#0F172A',
    color: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    fontSize: 18,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#334155'
  }
});