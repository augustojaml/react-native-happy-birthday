import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Loading } from '../../../components/Loading';
import { H3 } from '../../../global/styles/components';
import { theme } from '../../../global/styles/theme';
import { useSession } from '../../../hooks/useSession';
import { api } from '../../../services/api';
import { cardsInfo } from '../../../utils/cardInfo';
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

export function Dashboard() {
  const navigation = useNavigation();
  const { signOut } = useSession();

  const [dashData, setDashData] = useState<VoucherProps>({} as VoucherProps);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await api.get('/v1/dashboard');
      const { vouchers, ...info } = response.data;
      const infoData: CardProps[] = [];

      Object.entries(info).forEach((entry) => {
        const [key, value] = entry;
        let temp: CardProps = Object.assign(
          {},
          cardsInfo.find((c) => c.key === key)
        );
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

  async function handleLogout() {
    signOut();
    navigation.navigate('Home');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.secondary} />

      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}
