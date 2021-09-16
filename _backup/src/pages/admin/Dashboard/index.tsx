import React from 'react';
import { HeaderTitle } from '../../../components/Header/HeaderTitle';
import { InfoItem } from '../../../components/InfoItem';
import { PRegular, theme } from '../../../global/styles/theme';
import { Container, List, Table, TableBody } from './styled';

const data = [
  {
    id: 1,
    title: 'Total voucher',
    icon: 'total',
    type: 'star',
    voucher: 20,
  },
  {
    id: 2,
    title: 'Facebook',
    icon: 'facebook',
    type: 'facebook',
    voucher: 5,
  },
  {
    id: 3,
    title: 'Instagram',
    icon: 'instagram',
    type: 'instagram',
    voucher: 3,
  },
  {
    id: 4,
    title: 'Google',
    icon: 'google',
    type: 'google',
    voucher: 4,
  },
  {
    id: 5,
    title: 'Sites',
    icon: 'sites',
    type: 'globe',
    voucher: 6,
  },
  {
    id: 6,
    title: 'Outros',
    icon: 'outros',
    type: 'cubes',
    voucher: 2,
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
          renderItem={({ item }) => <InfoItem item={item} />}
        />

        <HeaderTitle title="Voucher Recentes" />
        <Table>
          <TableBody>
            <PRegular color={theme.colors.secondary} fontSize="12" style={{ width: '75%' }}>
              Augusto Monteiro
            </PRegular>
            <PRegular color={theme.colors.secondary} fontSize="12" style={{ width: '25%' }}>
              17/06/1977
            </PRegular>
          </TableBody>
          <TableBody>
            <PRegular color={theme.colors.secondary} fontSize="12" style={{ width: '75%' }}>
              Flavia Lima
            </PRegular>
            <PRegular color={theme.colors.secondary} fontSize="12" style={{ width: '25%' }}>
              17/06/1979
            </PRegular>
          </TableBody>
          <TableBody>
            <PRegular color={theme.colors.secondary} fontSize="12" style={{ width: '75%' }}>
              Marcio Lima
            </PRegular>
            <PRegular color={theme.colors.secondary} fontSize="12" style={{ width: '25%' }}>
              17/06/1988
            </PRegular>
          </TableBody>
        </Table>
      </Container>
    </>
  );
}
