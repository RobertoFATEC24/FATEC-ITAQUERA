import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function BotaoJogo({ titulo, onPress, tipo = 'primario' }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.botao,
          tipo === 'secundario' && styles.botaoSecundario
        ]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.texto,
            tipo === 'secundario' && styles.textoSecundario
          ]}
        >
          {titulo}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10
  },

  botao: {
    backgroundColor: '#38BDF8',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5
  },

  botaoSecundario: {
    backgroundColor: '#22C55E'
  },

  texto: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: 'bold'
  },

  textoSecundario: {
    color: '#FFFFFF'
  }
});