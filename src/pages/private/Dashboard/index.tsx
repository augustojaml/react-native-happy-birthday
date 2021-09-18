import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { H3 } from '../../../global/styles/components';
import { theme } from '../../../global/styles/theme';
import { dashboard } from '../../../temp/dashboard';
import {
  Container,
  DashHeader,
  Title,
  IconDashHeader,
  ContainerIcon,
  DashRow,
  DashTextTD,
  DashTextTDPrimary,
  DashTextTDSecondary,
  List,
  InfoContainer,
  InfoContent,
  InfoHeader,
  InfoTitle,
  InfoIcon,
  InfoQuantity,
} from './styled';

export interface CardProps {
  key: string;
  title: string;
  icon: string;
  quantity: string;
}
interface VoucherProps {
  vouchers: Array<{
    id: number;
    name: string;
    date_of_birth: string;
  }>;
  infoData: CardProps[];
}

const cardsInfo = [
  {
    key: 'total',
    title: 'Total',
    icon: 'star',
    quantity: '0',
  },
  {
    key: 'facebook',
    title: 'Facebook',
    icon: 'facebook',
    quantity: '0',
  },
  {
    key: 'google',
    title: 'Google',
    icon: 'google',
    quantity: '0',
  },
  {
    key: 'instagram',
    title: 'Instagram',
    icon: 'instagram',
    quantity: '0',
  },
  {
    key: 'site',
    title: 'Site',
    icon: 'globe',
    quantity: '0',
  },
  {
    key: 'others',
    title: 'Outros',
    icon: 'cubes',
    quantity: '0',
  },
];

export function DashBoard() {
  const navigation = useNavigation();

  const [dashData, setDashData] = useState<VoucherProps>({} as VoucherProps);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { vouchers, ...info } = dashboard;
      const infoData: CardProps[] = [];

      Object.entries(info).forEach((entry) => {
        const [key, value] = entry;
        let card = cardsInfo.find((c) => c.key === key);
        let temp: CardProps = Object.assign({}, card);
        Object.assign(temp, {
          quantity: value,
        });
        infoData.push(temp);
      });

      const data: VoucherProps = {
        vouchers: vouchers,
        infoData: infoData,
      };

      setDashData(data);

      setIsLoading(false);
    })();
  }, []);

  function handleLogout() {
    navigation.navigate('SignIn');
  }

  if (isLoading) {
    return <H3>Carregando...</H3>;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.secondary} />
      <Container>
        <DashHeader>
          <Title>Dados Gerais</Title>
          <ContainerIcon onPress={handleLogout}>
            <IconDashHeader name="exit" />
          </ContainerIcon>
        </DashHeader>

        <List
          data={dashData.infoData}
          keyExtractor={(item) => item.key}
          numColumns={3}
          renderItem={({ item }) => (
            <InfoContainer>
              <InfoContent>
                <InfoHeader>
                  <InfoTitle>{item.title}</InfoTitle>
                  <InfoIcon name={item.icon} />
                </InfoHeader>
                <InfoQuantity>{item.quantity}</InfoQuantity>
              </InfoContent>
            </InfoContainer>
          )}
        />

        <DashHeader>
          <Title>Vouchers Recentes</Title>
        </DashHeader>

        {dashData &&
          dashData.vouchers.map((voucher) => (
            <DashRow key={voucher.id}>
              <DashTextTDPrimary>
                <DashTextTD>{voucher.name}</DashTextTD>
              </DashTextTDPrimary>
              <DashTextTDSecondary>
                <DashTextTD>{voucher.date_of_birth}</DashTextTD>
              </DashTextTDSecondary>
            </DashRow>
          ))}
      </Container>
    </>
  );
}
