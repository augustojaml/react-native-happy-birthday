import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Home } from '../pages/public/Home';
// import { Form } from '../pages/public/Voucher';
// import { Congratulations } from '../pages/public/Congratulations';
import { SignIn } from '../pages/public/SignIn';
import { DashBoard } from '../pages/private/Dashboard';

const { Navigator: NavigatorContainer, Screen: Page } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: undefined;
      Dashboard: undefined;
      Home: undefined;
      Form: undefined;
      Congratulations: undefined;
    }
  }
}

export function AppRoute() {
  const token = null;

  return (
    <>
      <NavigationContainer>
        <NavigatorContainer initialRouteName="Home">
          <Page options={{ headerShown: false }} name="SignIn" component={token ? DashBoard : SignIn} />
          <Page options={{ headerShown: false }} name="Dashboard" component={DashBoard} />
        </NavigatorContainer>
      </NavigationContainer>
    </>
  );
}
