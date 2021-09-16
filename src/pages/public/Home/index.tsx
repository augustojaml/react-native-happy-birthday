import React from 'react';
import { H1, H3, LogoImg, PBold, PRegular, theme } from '../../../global/styles/theme';
import { Container, BalloonImg } from './styled';

import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../components/Form/Button';
import { Header } from '../../../components/Header';

import { MotiView } from 'moti';

export function Home() {
  const navigation = useNavigation<any>();

  function handleMoveVoucher() {
    navigation.navigate('Voucher');
  }

  function handleMoveSign() {
    navigation.navigate('SignIn');
  }

  return (
    <>
      <Header showSetting onPressSetting={handleMoveSign} />
      <Container>
        <LogoImg marginTop="0" />
        <H1>Hoje vai ser {'\n'} uma festa!</H1>
        <PRegular textAlign="center">
          No dia do seu aniversário o{' '}
          <PBold fontSize="14" color={theme.colors.secondary}>
            Botequinho do Brawziin
          </PBold>{' '}
          vai te presentear com um voucher valendo um rodízio de pizza
        </PRegular>
        <MotiView
          from={{
            translateY: 20,
          }}
          animate={{
            translateY: 20,
          }}
          transition={{
            loop: true,
            type: 'timing',
            duration: 1500,
            delay: 100,
          }}
        >
          <BalloonImg />
        </MotiView>

        <H3 textAlign="center">E ai, quer ganhar{'\n'}um rodízio grátis</H3>

        <Button title="Receber seu voucher" onPress={handleMoveVoucher} />
      </Container>
    </>
  );
}
