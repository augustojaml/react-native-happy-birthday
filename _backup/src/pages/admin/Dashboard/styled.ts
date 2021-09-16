import { FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FlatItemProps } from '../../../components/InfoItem/style';
import { theme } from '../../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.primary};
  padding: ${RFPercentage(3)}px;
`;

export const List = styled(FlatList as new () => FlatList<FlatItemProps>)`
  margin-top: ${RFPercentage(2)}px;
  flex-grow: 0;
`;

export const Table = styled.View`
  margin-top: ${RFValue(15)}px;
`;

export const TableBody = styled.View`
  height: ${RFValue(40)}px;
  background: ${theme.colors.white};
  flex-direction: row;
  align-items: center;
  padding: 0 ${RFValue(12)}px;
  border-radius: ${RFValue(4)}px;
  margin-bottom: ${RFValue(4)}px;
`;
