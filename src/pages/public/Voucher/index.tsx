import React from 'react';
import { H1, H3, LogoImg, PBold, PRegular, theme } from '../../../global/styles/theme';

import { Container, Form } from './styled';
import { InputIcon } from '../../../components/Form/InputIcon';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Button } from '../../../components/Form/Button';

export function Voucher() {
  return (
    <>
      <Container>
        <LogoImg />
        <H1 marginBottom="30">Hoje vai ser {'\n'} uma festa!</H1>
        <H3 textAlign="center" marginBottom="30">
          Aqui no Botequinho do Brawziin aniversariante do dia ganha rodízio gratis
        </H3>
        <PRegular textAlign="center" marginBottom="30" fontSize="11">
          Válido somente no dia do seu aniversário,{' '}
          <PBold fontSize="11">MEDIANTE APRESENTAÇÃO DO VOUCHER IMPRESSO E DOCUMENTO DE INDENTIFICAÇÃO COM FOTO</PBold>.
          Consultar horário de funcionamento no site Botequinho do Brawziin. Bebidas e sobremesas, 10% a parte.
          Cadastre-se 2 dias antes para enviarmos seu voucher.
        </PRegular>
        <Form>
          <H3 textAlign="center" marginBottom="20">
            Quer receber seu voucher de Aniversário grátis
          </H3>

          <InputIcon placeholder="Nome" component={Feather} type="user" />
          <InputIcon placeholder="Email" component={Feather} type="mail" />
          <InputIcon placeholder="Whatsapp" component={FontAwesome} type="whatsapp" />
          <InputIcon placeholder="Data de Nascimento" component={FontAwesome} type="calendar" />
          <InputIcon placeholder="Como nos Conheceu" component={MaterialIcons} type="where-to-vote" />
          <Button title="Receber voucher" background={theme.colors.primary} />
        </Form>
      </Container>
    </>
  );
}
