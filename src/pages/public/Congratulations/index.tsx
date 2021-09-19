import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';
import { LogoImg } from '../../../global/styles/components';
import { theme } from '../../../global/styles/theme';
import { Container, Title, SubTitle, PresentImg, TextRegular, TextBold, BorderlessIcon, IconHome } from './styled';

type ParamList = {
  Congratulations: {
    name: string;
    email: string;
  };
};

export function Congratulations() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'Congratulations'>>();

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
        <SubTitle>{route.params.name}</SubTitle>
        <TextRegular textAlign="center" marginBottom="10">
          Você receberá no seu E-mail
        </TextRegular>
        <TextBold fontSize="14" color={theme.colors.secondary} marginBottom="10">
          ({route.params.email})
        </TextBold>
        <TextRegular>
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
