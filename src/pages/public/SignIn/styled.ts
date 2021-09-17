import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { H1 } from '../../../global/styles/components';
import { theme } from '../../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.secondary};
  align-items: center;
  padding: ${RFPercentage(3)}px;
`;

export const Title = styled(H1)``;
