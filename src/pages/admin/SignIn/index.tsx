import React from 'react';

import { MaterialIcons, Entypo } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';

import { Button } from '../../../components/Form/Button';
import { InputLabel } from '../../../components/Form/InputLabel';
import { H1, LogoImg, theme } from '../../../global/styles/theme';
import { Container, Form } from './styled';

export function SignIn() {
  return (
    <>
      <Container>
        <LogoImg />
        <Form>
          <InputLabel label="Email" component={MaterialIcons} type="email" />
          <InputLabel label="Password" component={Entypo} type="lock-open" />
          <Button title="Entrar" background={theme.colors.primary} style={{ marginTop: RFValue(20) }} />
        </Form>
      </Container>
    </>
  );
}
