import React, { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Home } from '../pages/public/Home';
// import { Form } from '../pages/public/Voucher';
// import { Congratulations } from '../pages/public/Congratulations';
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
      Form: undefined;
      Congratulations: undefined;
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
          <Page options={{ headerShown: false }} name="Session" component={token ? Dashboard : SignIn} />
          <Page options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
        </NavigatorContainer>
      </NavigationContainer>
    </>
  );
}
