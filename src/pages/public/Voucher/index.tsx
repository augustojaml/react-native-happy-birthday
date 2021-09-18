import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Form } from '../../../components/Form';
import { Button } from '../../../components/Form/Button';
import { InputIcon } from '../../../components/Form/InputIcon';
import { Header } from '../../../components/Header';
import { LogoImg } from '../../../global/styles/components';
import { theme } from '../../../global/styles/theme';
import {
  Container,
  SubTitle,
  Title,
  TextRegular,
  TextBold,
  FormSubTitle,
  FormVoucher,
  FormGroup,
  FormInputGroup,
} from './styled';

export function Voucher() {
  const navigation = useNavigation();

  function moveToHome() {
    navigation.goBack();
  }

  function moveToCongratulations() {
    navigation.navigate('Congratulations');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      <Header background={theme.colors.primary} showAdminIcon={false} onPressBackIcon={moveToHome} />

      <Container>
        <LogoImg marginBottom="3" />

        <Title>Hoje vai ser {'\n'} uma festa!</Title>
        <SubTitle>Aqui no Botequinho do Brawziin aniversariante {'\n'} do dia ganha rodízio grátis</SubTitle>
        <TextRegular textAlign="center" fontSize="11">
          Válido somente no dia do seu aniversário,{' '}
          <TextBold fontSize="11">
            MEDIANTE APRESENTAÇÃO DO VOUCHER IMPRESSO E DOCUMENTO DE INDENTIFICAÇÃO COM FOTO
          </TextBold>
          . Consultar horário de funcionamento no site Botequinho do Brawziin. Bebidas e sobremesas, 10% a parte.
          Cadastre-se 2 dias antes para enviarmos seu voucher.
        </TextRegular>
        <FormVoucher>
          <FormSubTitle>Quer receber seu voucher de Aniversário grátis</FormSubTitle>
          <InputIcon name="person-outline" />
          <InputIcon name="md-mail-outline" />
          <InputIcon name="md-logo-whatsapp" />
          <InputIcon name="calendar-outline" />
          <InputIcon name="md-location-outline" />
          <Button
            icon="ios-gift"
            title="Receber voucher"
            marginTop="10"
            marginTBottom="10"
            onPress={moveToCongratulations}
          />
        </FormVoucher>
      </Container>
    </>
  );
}
