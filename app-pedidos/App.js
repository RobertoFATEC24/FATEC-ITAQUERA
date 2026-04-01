import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [produto, setProduto] = useState('Hambúrguer');
  const [bebida, setBebida] = useState('Refrigerante');
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

  const precos = {
    'Hambúrguer': 15,
    'Pizza': 20,
    'Hot Dog': 10,
    'Refrigerante': 5,
    'Suco': 6,
    'Água': 3
  };

  const imagens = {
    'Hambúrguer': 'https://img.icons8.com/?size=100&id=108404&format=png&color=000000',
    'Pizza': 'https://img.icons8.com/?size=100&id=95053&format=png&color=000000',
    'Hot Dog': 'https://img.icons8.com/?size=100&id=108407&format=png&color=000000',
    'Refrigerante': 'https://img.icons8.com/?size=100&id=24706&format=png&color=000000',
    'Suco': 'https://img.icons8.com/?size=100&id=8N4JofLzzY8z&format=png&color=000000',
    'Água': 'https://img.icons8.com/?size=100&id=7TybE8wnOxr7&format=png&color=000000'
  };

  const total = precos[produto] + precos[bebida];

const confirmarPedido = () => {
  setPedidoFinalizado(true);
};

if (pedidoFinalizado) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Pedido Finalizado!</Text>

      <Image source={{ uri: imagens[produto] }} style={styles.img} />
      <Image source={{ uri: imagens[bebida] }} style={styles.img} />

      <Text style={styles.resultado}>Produto: {produto}</Text>
      <Text style={styles.resultado}>Bebida: {bebida}</Text>

      <Text style={styles.total}>Total: R$ {total}</Text>

      <Button
        title="Novo Pedido"
        onPress={() => setPedidoFinalizado(false)}
      />
    </View>
  );
}

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>App de Pedido</Text>

      <Text style={styles.label}>Escolha o Produto:</Text>
      <Picker
        selectedValue={produto}
        onValueChange={(itemValue) => setProduto(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Hambúrguer" value="Hambúrguer" />
        <Picker.Item label="Pizza" value="Pizza" />
        <Picker.Item label="Hot Dog" value="Hot Dog" />
      </Picker>

      <Image source={{ uri: imagens[produto] }} style={styles.img} />

      <Text style={styles.label}>Escolha a Bebida:</Text>
      <Picker
        selectedValue={bebida}
        onValueChange={(itemValue) => setBebida(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Refrigerante" value="Refrigerante" />
        <Picker.Item label="Suco" value="Suco" />
        <Picker.Item label="Água" value="Água" />
      </Picker>

      <Image source={{ uri: imagens[bebida] }} style={styles.img} />

      <Text style={styles.resultado}>
        Pedido: {produto} + {bebida}
      </Text>

      <Text style={styles.total}>
        Total: R$ {total}
      </Text>

      <Button title="Confirmar Pedido" onPress={confirmarPedido} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#d35400'
  },
  label: {
    fontSize: 18,
    marginTop: 10
  },
  picker: {
    backgroundColor: '#fff',
    marginVertical: 10
  },
  img: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginVertical: 5
  },
  resultado: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center'
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
    marginBottom: 20
  }
});