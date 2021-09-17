import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Form } from '../../../components/Form';
import { Button } from '../../../components/Form/Button';
import { InputLabel } from '../../../components/Form/InputLabel';
import { Header } from '../../../components/Header';
import { LogoImg } from '../../../global/styles/components';
import { theme } from '../../../global/styles/theme';
import { Container } from './styled';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Dashboard');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.secondary} />
      <Header background={theme.colors.secondary} showAdminIcon={false} />
      <Container>
        <Form background={theme.colors.secondary}>
          <LogoImg marginTop="5" marginBottom="10" />
          <InputLabel icon="mail" labelName="Email" message="Invalid Email" />
          <InputLabel icon="md-lock-open" labelName="Password" message="Invalid Password" />
          <Button marginTop="30" title="Entrar" onPress={handleSignIn} />
        </Form>
      </Container>
    </>
  );
}
