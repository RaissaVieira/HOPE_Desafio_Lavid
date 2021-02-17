import React, { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js'
import Header from '../../components/Header';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

export default function ForgotPassword() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  async function handleNewPassword () {
    const user = {
      email: email,
    }
  
    await api.post('forgotPassword', user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    /* try {
      
  
    } catch (err) {
      alert('Erro ao solicitar nova senha');
    } */
  }

  function handleGoToBackLogin() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
        <Header text="Recuperar senha" />
        <Text style={styles.text}>
            Enviaremos para seu e-mail uma nova senha de acesso.
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          placeholderTextColor='#000000'
        />
        <RectButton onPress={handleNewPassword} style={styles.button} >
          <Text style={styles.textButton} > ENVIAR </Text>
        </RectButton>
        <Button onPress={handleGoToBackLogin} title="Voltar" color='#000000'/>
    </View>
  );
}