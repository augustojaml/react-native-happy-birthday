import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';

import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { BalooBhai2_400Regular, BalooBhai2_700Bold } from '@expo-google-fonts/baloo-bhai-2';
import { SessionProvider } from './hooks/useSession';
import { AppRoute } from './route/AppRoute';

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
      <StatusBar style="light" />
      <SessionProvider>
        <AppRoute />
      </SessionProvider>
    </>
  );
}
