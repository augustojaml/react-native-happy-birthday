import React from 'react';

import { MaterialIcons, Entypo } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';

import { Button } from '../../../components/Form/Button';
import { InputLabel } from '../../../components/Form/InputLabel';
import { LogoImg, theme } from '../../../global/styles/theme';
import { Container, Form } from './styled';
import { useNavigation } from '@react-navigation/native';
import { Dashboard } from '../Dashboard';
import { Home } from '../../public/Home';
import { Header } from '../../../components/Header';

export function SignIn() {
  const navigation = useNavigation<any>();

  function handleMoveDashboard() {
    navigation.navigate(Dashboard);
  }

  function handleMoveHome() {
    navigation.navigate(Home);
  }

  return (
    <>
      <Header showBack onPressBack={handleMoveHome} background={theme.colors.secondary} />
      <Container>
        <LogoImg marginTop="-10" />
        <Form>
          <InputLabel label="Email" component={MaterialIcons} type="email" />
          <InputLabel label="Password" component={Entypo} type="lock-open" />
          <Button
            title="Entrar"
            background={theme.colors.primary}
            style={{ marginTop: RFValue(20) }}
            onPress={handleMoveDashboard}
          />
        </Form>
      </Container>
    </>
  );
}
