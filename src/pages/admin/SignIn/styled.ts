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
