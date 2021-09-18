import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Button } from '../../../components/Form/Button';
import { Header } from '../../../components/Header';
import { LogoImg } from '../../../global/styles/components';
import { theme } from '../../../global/styles/theme';
import { Container, Title, TextRegular, TextBold, SubTitle, BalloonImg } from './styled';

export function Home() {
  const navigation = useNavigation();

  function moveToDashboard() {
    navigation.navigate('Session');
  }

  function moveToForm() {
    navigation.navigate('Voucher');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      <Header background={theme.colors.primary} showBackIcon={false} onPressAdminIcon={moveToDashboard} />

      <Container>
        <LogoImg />
        <Title>Hoje vai ser {'\n'} uma festa!</Title>
        <TextRegular textAlign="center">
          No dia do seu aniversário o{' '}
          <TextBold fontSize="14" color={theme.colors.secondary}>
            Botequinho do Brawziin
          </TextBold>{' '}
          vai te presentear com um voucher valendo um rodízio de pizza
        </TextRegular>
        <SubTitle textAlign="center">E ai, quer ganhar{'\n'}um rodízio grátis</SubTitle>
        <BalloonImg />
        <Button title="Receber seu voucher" background={theme.colors.success} icon="happy-sharp" onPress={moveToForm} />
      </Container>
    </>
  );
}
