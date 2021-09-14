import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppRoute } from './src/route/AppRoute';
import AppLoading from 'expo-app-loading';

import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { BalooBhai2_400Regular, BalooBhai2_700Bold } from '@expo-google-fonts/baloo-bhai-2';

export default function App() {
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
      <StatusBar />
      <AppRoute />
    </>
  );
}
