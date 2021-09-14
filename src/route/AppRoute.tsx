import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/public/Home';
import { Voucher } from '../pages/public/Voucher';
import { Congratulations } from '../pages/public/Congratulations';

const { Navigator: NavigatorContainer, Screen: Page } = createNativeStackNavigator();

export function AppRoute() {
  return (
    <>
      <NavigationContainer>
        <NavigatorContainer initialRouteName="Home">
          <Page options={{ headerShown: false }} name="Home" component={Home} />
          <Page options={{ headerShown: false }} name="Voucher" component={Voucher} />
          <Page options={{ headerShown: false }} name="Congratulations" component={Congratulations} />
        </NavigatorContainer>
      </NavigationContainer>
    </>
  );
}
