import { FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';

interface FlatItemProps {
  id: number;
  title: string;
  icon: string;
}

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.primary};
  padding: ${RFPercentage(3)}px;
`;

export const List = styled(FlatList as new () => FlatList<FlatItemProps>)`
  margin-top: ${RFPercentage(2)}px;
  flex-grow: 0;
`;

export const InfoItem = styled.View`
  background: ${theme.colors.white};
  margin: ${RFValue(3)}px;
  width: 32%;
  padding: ${RFValue(5)}px;
`;

export const InfoHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
