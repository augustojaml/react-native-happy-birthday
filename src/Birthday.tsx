import React from 'react';

import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { BalooBhai2_400Regular, BalooBhai2_700Bold } from '@expo-google-fonts/baloo-bhai-2';

import { AppRoute } from './routes/stack.routes';
import { StatusBar } from 'react-native';

export function Birthday() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
    BalooBhai2_400Regular,
    BalooBhai2_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <AppRoute />
    </>
  );
}
