import styled from 'styled-components/native';

import { TextInput as RNTextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../../global/styles/theme';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View``;

export const Label = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled(RNTextInput)`
  padding: ${RFValue(8)}px ${RFValue(8)}px ${RFValue(5)}px ${RFValue(8)}px;
  border-bottom-width: 1px;
  border-color: ${theme.colors.primary};
`;

export const Message = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(20)}px;
  margin-top: ${RFValue(3)}px;
`;

export const InfoIcon = styled(Ionicons).attrs({
  size: RFValue(15),
  color: theme.colors.error,
})`
  margin-right: ${RFValue(5)}px;
`;
