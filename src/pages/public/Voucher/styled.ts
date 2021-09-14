import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: RFValue(50),
  },
})`
  background: ${theme.colors.primary};
  padding: 0 ${RFValue(16)}px;
`;

export const Form = styled.View`
  background: ${theme.colors.secondary};
  padding: ${RFValue(16)}px;
  border-radius: 8px;
  margin-bottom: 30px;
  width: 100%;
`;
