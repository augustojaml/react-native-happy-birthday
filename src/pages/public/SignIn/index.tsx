import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { StatusBar } from 'react-native';
import { Form } from '../../../components/Form';
import { Button } from '../../../components/Form/Button';
import { InputLabel } from '../../../components/Form/InputLabel';
import { Header } from '../../../components/Header';
import { LogoImg } from '../../../global/styles/components';
import { theme } from '../../../global/styles/theme';
import { useSession } from '../../../hooks/useSession';
import { Container } from './styled';

interface Session {
  email: string;
  password: string;
}

export function SignIn() {
  const navigation = useNavigation();
  const { signIn, errors, email, password, setEmail, setPassword } = useSession();

  const handleSignIn = useCallback(async () => {
    const token = await signIn({ email: email, password: password });
    console.log(token);
    if (token) {
      navigation.navigate('Dashboard');
    }
  }, [email, password]);

  const moveToHome = useCallback(() => {
    navigation.navigate('Home');
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.secondary} />
      <Header background={theme.colors.secondary} showAdminIcon={false} onPressBackIcon={moveToHome} />
      <Container>
        <Form background={theme.colors.secondary}>
          <LogoImg marginTop="5" marginBottom="10" />
          <InputLabel
            icon="mail"
            labelName="Email"
            message={errors.email && errors.email}
            value={email}
            onChangeText={setEmail}
          />
          <InputLabel
            icon="md-lock-open"
            labelName="Password"
            message={errors.password && errors.password}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Button marginTop="30" title="Entrar" onPress={handleSignIn} />
        </Form>
      </Container>
    </>
  );
}
