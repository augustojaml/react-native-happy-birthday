import React, { useCallback, useState } from 'react';

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
import { useSession } from '../../../hooks/useSession';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function SignIn() {
  const navigation = useNavigation<any>();
  const { signIn, errors } = useSession();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleMoveDashboard() {
    navigation.navigate(Dashboard);
  }

  function handleMoveHome() {
    navigation.navigate(Home);
  }

  const handleSignIn = useCallback(async () => {
    signIn(email, password);
  }, [email, password]);

  return (
    <>
      <Header showBack onPressBack={handleMoveHome} background={theme.colors.secondary} />
      <Container>
        <LogoImg marginTop="-10" />
        <Form>
          <InputLabel
            label="Email"
            component={MaterialIcons}
            type="email"
            value={email}
            onChangeText={setEmail}
            error={errors.email && errors.email}
          />
          <InputLabel
            label="Password"
            component={Entypo}
            type="lock-open"
            value={password}
            onChangeText={setPassword}
            error={errors.password && errors.password}
          />
          <Button
            title="Entrar"
            background={theme.colors.primary}
            style={{ marginTop: RFValue(20) }}
            onPress={handleSignIn}
          />
        </Form>
      </Container>
    </>
  );
}
