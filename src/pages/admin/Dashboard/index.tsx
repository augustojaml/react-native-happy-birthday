import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { HeaderTitle } from '../../../components/Header/HeaderTitle';
import { H3, PBold, PRegular, theme } from '../../../global/styles/theme';
import { Container, InfoItem, InfoHeader, List } from './styled';
import { FontAwesome } from '@expo/vector-icons';

const data = [
  {
    id: 1,
    title: 'Total voucher',
    icon: 'total',
    type: 'star',
  },
  {
    id: 2,
    title: 'Facebook',
    icon: 'facebook',
  },
  {
    id: 3,
    title: 'Instagram',
    icon: 'instagram',
  },
  {
    id: 4,
    title: 'Google',
    icon: 'google',
  },
  {
    id: 5,
    title: 'Sites',
    icon: 'sites',
  },
  {
    id: 6,
    title: 'Outros',
    icon: 'outros',
  },
];

export function Dashboard() {
  return (
    <>
      <Container>
        <HeaderTitle title="Dados Gerais" showIcon />
        <List
          data={data}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <InfoItem key={item.id}>
              <InfoHeader>
                <PRegular fontSize="12" color={theme.colors.secondary}>
                  Facebook
                </PRegular>
                <FontAwesome name="facebook" size={15} color="black" />
              </InfoHeader>
              <H3 color={theme.colors.secondary}>66</H3>
            </InfoItem>
          )}
        />

        <HeaderTitle title="Voucher Recentes" />
      </Container>
    </>
  );
}
