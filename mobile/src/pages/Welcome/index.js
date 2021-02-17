import React, { useState, useEffect } from 'react';
import { View, Button, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js'
import Header from '../../components/Header';
import api from '../../services/api.js';

export default function Welcome() {

  const navigation = useNavigation();

  const [name, setName] = useState([]);

  const Token = async () => {
    const value = await AsyncStorage.getItem('Token')

    return value;
  }
  
  Token().then( value => {
    api.get('name', {
      headers: {
        Authorization: `Bearer ${value}`
      }
    }).then(response => {
      setName(response.data.name)
    }) 
  })
  
  function handleGoToBackLogin() {
    AsyncStorage.clear();

    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Header text={`Bem vindx, ${name}`} />
      <Button onPress={handleGoToBackLogin} title="Sair" color='#000000'/>
    </View>
  );
}

