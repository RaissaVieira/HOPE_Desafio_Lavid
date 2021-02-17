import React, { useState } from 'react';
import { View, Button, TextInput, Text, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js';
import Header from '../../components/Header';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

export default function Login() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleNavigateToForgotPasswordPage() {
    navigation.navigate('ForgotPassword');
  }

  async function handleNavigateToWelcomePage() {

    const user = {
      email:email,
      password:senha,
    }

    try {
      
      const response = await api.post('authentication', user);

      AsyncStorage.setItem('Token', `${response.data.token}`);
      
      navigation.navigate('Welcome');

    } catch (err) {
      alert('Email e/ou senha inválidos');
    }

  }

  return (
    <View style={styles.container}>
      <Header text="Log in" />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        placeholderTextColor='#000000'
      />

      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={text => setSenha(text)}
        placeholder="Senha"
        placeholderTextColor='#000000'
        secureTextEntry={true}
      />
      <RectButton onPress={handleNavigateToWelcomePage} style={styles.button} >
        <Text style={styles.text} > ENTRAR </Text>
      </RectButton>
      <Button onPress={handleNavigateToForgotPasswordPage} title="Esqueceu sua senha?" color='#000000'/>
    </View>
  );
}

