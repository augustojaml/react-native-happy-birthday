import React from 'react';
import { H1, LogoImg, PBold, PRegular, theme } from '../../../global/styles/theme';
import { Container, BalloonImg } from './styled';

import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../components/Form/Button';

export function Home() {
  const navigation = useNavigation<any>();

  function handleMovingPage() {
    navigation.navigate('Voucher');
  }

  return (
    <>
      <Container>
        <LogoImg />
        <H1 marginBottom="30">Hoje vai ser {'\n'} uma festa!</H1>
        <PRegular textAlign="center" marginBottom="30">
          No dia do seu aniversário o{' '}
          <PBold fontSize="14" color={theme.colors.secondary}>
            Botequinho do Brawziin
          </PBold>{' '}
          vai te presentear com um voucher valendo um rodízio de pizza
        </PRegular>
        <BalloonImg />
        <Button title="Receber seu voucher" onPress={handleMovingPage} />
      </Container>
    </>
  );
}
