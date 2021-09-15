import { BorderlessButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.secondary};
  align-items: center;
  justify-content: center;
  padding: ${RFPercentage(3)}px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: ${RFValue(20)}px;
`;

export const BorderlessIcon = styled(BorderlessButton)`
  margin-top: ${RFPercentage(5)}px;
  align-items: center;
`;

export const IconHome = styled(AntDesign)`
  font-size: ${RFValue(24)}px;
  color: ${theme.colors.white};
`;
