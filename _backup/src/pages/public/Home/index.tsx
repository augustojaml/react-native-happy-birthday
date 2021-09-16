import React, { useState, useEffect } from 'react';
import { H1, H3, LogoImg, PBold, PRegular, theme } from '../../../global/styles/theme';
import { Container, BalloonImg } from './styled';

import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../components/Form/Button';
import { Header } from '../../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../../../services/api';

export function Home() {
  const navigation = useNavigation<any>();

  const [token, setToken] = useState('');

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('@Birthday:token');

      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        setToken(token);
      }
    })();
  }, []);

  function handleMoveVoucher() {
    navigation.navigate('Voucher');
  }

  function handleMoveSign() {
    if (!token) {
      navigation.navigate('SignIn');
    } else {
      navigation.navigate('Dashboard');
    }
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

        <BalloonImg />

        <H3 textAlign="center">E ai, quer ganhar{'\n'}um rodízio grátis</H3>

        <Button title="Receber seu voucher" onPress={handleMoveVoucher} />
      </Container>
    </>
  );
}
