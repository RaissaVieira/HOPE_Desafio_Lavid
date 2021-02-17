import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js'
import Header from '../../components/Header';

export default function Welcome() {

  const navigation = useNavigation();

  function handleGoToBackLogin() {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Header text="Bem vindx, Raissa" />
      <Button onPress={handleGoToBackLogin} title="Sair" color='#000000'/>
    </View>
  );
}

