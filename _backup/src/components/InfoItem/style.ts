import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';
import { FontAwesome } from '@expo/vector-icons';

export interface FlatItemProps {
  id: number;
  title: string;
  icon: string;
  type: string;
  voucher: number;
}

export const InfoContainer = styled.View`
  background: ${theme.colors.white};
  margin: ${RFValue(3)}px;
  width: 31%;
  padding: ${RFValue(5)}px;
`;

export const InfoHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled(FontAwesome)`
  font-size: ${RFValue(15)}px;
  color: ${theme.colors.secondary};
`;
