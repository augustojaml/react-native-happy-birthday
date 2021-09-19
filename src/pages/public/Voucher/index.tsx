import { useNavigation } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { StatusBar } from 'react-native';
import { Button } from '../../../components/Form/Button';
import { InputIcon } from '../../../components/Form/InputIcon';
import { InputSelect } from '../../../components/Form/InputSelect';
import { Header } from '../../../components/Header';
import { LogoImg, H3 } from '../../../global/styles/components';
import { theme } from '../../../global/styles/theme';
import { ModalItem } from '../../../utils/modalItems';
import { ModalSelect } from './ModalSelect';
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
  ModalContent,
} from './styled';

export function Voucher() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [how_did_you_find_us, setHow_did_you_find_us] = useState('');

  const [showModal, setShowModal] = useState(false);

  function moveToHome() {
    navigation.goBack();
  }

  function moveToCongratulations() {
    navigation.navigate('Congratulations');
  }

  function closeModal() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }

  const handleCreateVoucher = useCallback(() => {
    const data = {
      name: name,
      email: email,
      phone: phone,
      date_of_birth: date_of_birth,
      how_did_you_find_us: how_did_you_find_us,
    };

    console.log('Voucher', data);

    //moveToCongratulations();
  }, [name, email, phone, date_of_birth, how_did_you_find_us]);

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
          <InputIcon name="person-outline" value={name} onChangeText={setName} placeholder="Nome" />
          <InputIcon name="md-mail-outline" value={email} onChangeText={setEmail} placeholder="E-mail" />
          {/* <FormGroup> */}
          {/* <FormInputGroup> */}
          <InputIcon
            name="md-logo-whatsapp"
            masker="phone"
            value={phone}
            onChangeText={setPhone}
            placeholder="Whatsapp"
          />
          {/* </FormInputGroup> */}
          {/* <FormInputGroup> */}
          <InputIcon
            name="calendar-outline"
            masker="date"
            value={date_of_birth}
            onChangeText={setDate_of_birth}
            placeholder="Data de Nasc"
          />
          {/* </FormInputGroup> */}
          {/* </FormGroup> */}
          <InputSelect
            name="md-location-outline"
            title={
              how_did_you_find_us
                ? ModalItem.find((item) => item.key === how_did_you_find_us)?.title
                : 'Onde nos conheceu'
            }
            onPress={openModal}
            placeHolderColor={how_did_you_find_us && theme.colors.secondary}
          />
          <Button
            icon="ios-gift"
            title="Receber voucher"
            marginTop="20"
            marginTBottom="10"
            onPress={handleCreateVoucher}
          />
        </FormVoucher>
      </Container>
      <ModalContent visible={showModal} onRequestClose={closeModal}>
        <ModalSelect closeModal={closeModal} setItemSelected={setHow_did_you_find_us} selected={how_did_you_find_us} />
      </ModalContent>
    </>
  );
}
