import React, { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/public/Home';
import { Voucher } from '../pages/public/Voucher';
import { Congratulations } from '../pages/public/Congratulations';
import { SignIn } from '../pages/public/SignIn';
import { Dashboard } from '../pages/private/Dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

const { Navigator: NavigatorContainer, Screen: Page } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Session: undefined;
      Dashboard: undefined;
      Home: undefined;
      Voucher: undefined;
      Congratulations: { name: string; email: string };
    }
  }
}

export function AppRoute() {
  const [token, setToken] = useState('');

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('@Birthday:token');
      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        setToken(token);
      }
    })();
  }, []);

  return (
    <>
      <NavigationContainer>
        <NavigatorContainer initialRouteName="Home">
          <Page options={{ headerShown: false }} name="Home" component={Home} />
          <Page options={{ headerShown: false }} name="Voucher" component={Voucher} />
          <Page options={{ headerShown: false }} name="Congratulations" component={Congratulations} />

          <Page options={{ headerShown: false }} name="Session" component={token ? Dashboard : SignIn} />
          <Page options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
        </NavigatorContainer>
      </NavigationContainer>
    </>
  );
}
