import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: ${theme.colors.primary};
`;

export const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFPercentage(10)}px;
  border-bottom-width: 1px;
  border-color: ${theme.colors.secondary};
  padding-bottom: 8px;
`;

export const BorderlessIcon = styled(BorderlessButton)`
  align-items: center;
`;

export const Icon = styled(Ionicons).attrs({
  size: RFValue(24),
  color: theme.colors.white,
})``;
