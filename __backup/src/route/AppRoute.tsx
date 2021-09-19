import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/public/Home';
import { Voucher } from '../pages/public/Voucher';
import { Congratulations } from '../pages/public/Congratulations';
import { SignIn } from '../pages/admin/SignIn';
import { Dashboard } from '../pages/admin/Dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

const { Navigator: NavigatorContainer, Screen: Page } = createNativeStackNavigator();

export function AppRoute() {
  return (
    <>
      <NavigationContainer>
        <NavigatorContainer initialRouteName="Home">
          <Page options={{ headerShown: false }} name="Home" component={Home} />
          <Page options={{ headerShown: false }} name="Voucher" component={Voucher} />
          <Page options={{ headerShown: false }} name="Congratulations" component={Congratulations} />

          <Page options={{ headerShown: false }} name="SignIn" component={SignIn} />
          <Page options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
        </NavigatorContainer>
      </NavigationContainer>
    </>
  );
}
