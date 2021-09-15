import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from '../../../components/Form/Button';
import { H1, H3, LogoImg, PBold, PRegular, theme } from '../../../global/styles/theme';
import { Home } from '../Home';
import { BorderlessIcon, Container, PresentImg, IconHome } from './styled';

export function Congratulations() {
  const navigation = useNavigation<any>();

  function handleMovingPage() {
    navigation.navigate(Home);
  }

  return (
    <>
      <Container>
        <LogoImg />
        <H1 marginBottom="30">Parabéns</H1>
        <H3 color={theme.colors.secondary}>Augusto Monteiro</H3>

        <PresentImg />

        <PRegular textAlign="center" marginBottom="30">
          Você receberá no seu E-mail{' '}
          <PBold fontSize="14" color={theme.colors.secondary}>
            (jamonteirolima@gmail.com)
          </PBold>{' '}
          o voucher para ser consumido no dia do seu aniversário. Se não encontrá-lo na sua caixa de entrada, verifique
          sua caixa de span
        </PRegular>
        <BorderlessIcon onPress={handleMovingPage}>
          <IconHome name="home" />
          <PBold fontSize="10">Voltar para o Site</PBold>
        </BorderlessIcon>
      </Container>
    </>
  );
}
