import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppStack from './src/AppStack';

import { Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import { Roboto_400Regular, useFonts } from '@expo-google-fonts/roboto';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Roboto_400Regular
  });

  return (
    <>
      <AppStack />
      <StatusBar style="auto" />
    </>
  );
}
