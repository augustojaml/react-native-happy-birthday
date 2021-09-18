import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';
import { Header } from '../../../components/Header';
import { LogoImg } from '../../../global/styles/components';
import { theme } from '../../../global/styles/theme';
import { Container, Title, SubTitle, PresentImg, TextRegular, TextBold, BorderlessIcon, IconHome } from './styled';

export function Congratulations() {
  const navigation = useNavigation();

  const moveToHome = useCallback(() => {
    navigation.navigate('Home');
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />

      <Container>
        <LogoImg marginBottom="3" />
        <Title>Parabéns</Title>

        <PresentImg />

        <SubTitle>Augusto Monteiro</SubTitle>
        <TextRegular textAlign="center" marginBottom="30">
          Você receberá no seu E-mail{' '}
          <TextBold fontSize="14" color={theme.colors.secondary}>
            (jamonteirolima@gmail.com)
          </TextBold>{' '}
          o voucher para ser consumido no dia do seu aniversário. Se não encontrá-lo na sua caixa de entrada, verifique
          sua caixa de span
        </TextRegular>
        <BorderlessIcon onPress={moveToHome}>
          <IconHome name="home" />
          <TextBold fontSize="10">Voltar para Home</TextBold>
        </BorderlessIcon>
      </Container>
    </>
  );
}
