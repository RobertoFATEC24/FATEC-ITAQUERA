import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';

import InputPalpite from '../components/InputGuess';
import BotaoJogo from '../components/GameButton';

export default function GameScreen() {
  const [numeroSecreto, setNumeroSecreto] = useState(
    Math.floor(Math.random() * 10)
  );

  const [palpite, setPalpite] = useState('');
  const [tentativas, setTentativas] = useState(3);
  const [mensagem, setMensagem] = useState(
    'Tente adivinhar o número entre 0 e 9'
  );
  const [fimDeJogo, setFimDeJogo] = useState(false);

  function verificarPalpite() {
    if (palpite === '') {
      Alert.alert('Atenção', 'Digite um número!');
      return;
    }

    const numeroDigitado = Number(palpite);

    if (numeroDigitado === numeroSecreto) {
      setMensagem('Parabéns! Você acertou o número!');
      setFimDeJogo(true);
      return;
    }

    const novasTentativas = tentativas - 1;

    if (novasTentativas > 0) {
      setTentativas(novasTentativas);
      setMensagem(
        `Você errou! Restam ${novasTentativas} tentativa(s).`
      );
    } else {
      setTentativas(0);
      setMensagem(
        `Você perdeu! O número sorteado era ${numeroSecreto}.`
      );
      setFimDeJogo(true);
    }

    setPalpite('');
  }

  function reiniciarJogo() {
    setNumeroSecreto(Math.floor(Math.random() * 10));
    setPalpite('');
    setTentativas(3);
    setMensagem('Tente adivinhar o número entre 0 e 9');
    setFimDeJogo(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>
          ACERTE O NÚMERO
        </Text>

        <Text style={styles.subtitulo}>
          Escolha um número entre 0 e 9
        </Text>

        <InputPalpite
          value={palpite}
          onChangeText={setPalpite}
        />

        {!fimDeJogo && (
          <BotaoJogo
            titulo="Enviar Palpite"
            onPress={verificarPalpite}
          />
        )}

        <Text style={styles.tentativas}>
          Tentativas restantes: {tentativas}
        </Text>

        <Text style={styles.mensagem}>
          {mensagem}
        </Text>

        {fimDeJogo && (
          <BotaoJogo
            titulo="Jogar Novamente"
            onPress={reiniciarJogo}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  card: {
    width: '100%',
    backgroundColor: '#1E293B',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center'
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10
  },

  subtitulo: {
    color: '#CBD5E1',
    fontSize: 16,
    marginBottom: 25
  },

  tentativas: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 20
  },

  mensagem: {
    color: '#38BDF8',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15
  }
});