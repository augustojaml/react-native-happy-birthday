import { useNavigation } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { Keyboard, StatusBar } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button } from '../../../components/Form/Button';
import { ButtonLoading } from '../../../components/Form/ButtonLoading';
import { InputIcon } from '../../../components/Form/InputIcon';
import { InputSelect } from '../../../components/Form/InputSelect';
import { Header } from '../../../components/Header';
import { LogoImg, H3 } from '../../../global/styles/components';
import { theme } from '../../../global/styles/theme';
import { ErrorProps } from '../../../hooks/useSession';
import { api } from '../../../services/api';
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

  const [errors, setErrors] = useState<ErrorProps>({});

  const [loading, setLoading] = useState(false);

  function moveToHome() {
    navigation.goBack();
  }

  // function moveToCongratulations() {
  //   navigation.navigate('Congratulations');
  // }

  function closeModal() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }

  const handleCreateVoucher = useCallback(async () => {
    const formData = {
      name: name,
      email: email,
      whatsapp: phone,
      date_of_birth: date_of_birth,
      how_did_you_find_us: how_did_you_find_us,
    };

    try {
      setLoading(true);
      const response = await api.post('v1/vouchers', formData);
      navigation.navigate('Congratulations', {
        name: response.data.name,
        email: response.data.email,
      });
      setLoading(false);
      setErrors({});
    } catch (errors: any) {
      let errorsProps: ErrorProps = {};
      Object.keys(errors.response.data.errors).forEach(function (key) {
        errorsProps[key] = errors.response.data.errors[key][0];
      });
      setErrors(errorsProps);
      setLoading(false);
    }
  }, [name, email, phone, date_of_birth, how_did_you_find_us]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      <Header background={theme.colors.primary} showAdminIcon={false} onPressBackIcon={moveToHome} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
            <InputIcon
              name="person-outline"
              value={name}
              onChangeText={setName}
              placeholder="Nome"
              message={errors.name && errors.name}
            />
            <InputIcon
              name="md-mail-outline"
              value={email}
              onChangeText={setEmail}
              placeholder="E-mail"
              message={errors.email && errors.email}
            />
            {/* <FormGroup> */}
            {/* <FormInputGroup> */}
            <InputIcon
              name="md-logo-whatsapp"
              masker="phone"
              value={phone}
              onChangeText={setPhone}
              placeholder="Whatsapp"
              message={errors.whatsapp && errors.whatsapp}
            />
            {/* </FormInputGroup> */}
            {/* <FormInputGroup> */}
            <InputIcon
              name="calendar-outline"
              masker="date"
              value={date_of_birth}
              onChangeText={setDate_of_birth}
              placeholder="Data de Nasc"
              message={errors.date_of_birth && errors.date_of_birth}
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
              message={errors.how_did_you_find_us && errors.how_did_you_find_us}
            />
            {loading ? (
              <ButtonLoading title="Aguarde..." marginTop="20" marginTBottom="10" />
            ) : (
              <Button
                icon="ios-gift"
                title="Receber voucher"
                marginTop="20"
                marginTBottom="10"
                onPress={handleCreateVoucher}
              />
            )}
          </FormVoucher>
        </Container>
      </TouchableWithoutFeedback>
      <ModalContent visible={showModal} onRequestClose={closeModal}>
        <ModalSelect closeModal={closeModal} setItemSelected={setHow_did_you_find_us} selected={how_did_you_find_us} />
      </ModalContent>
    </>
  );
}
