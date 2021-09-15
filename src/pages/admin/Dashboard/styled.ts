import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.primary};
  padding: ${RFPercentage(3)}px;
`;
