import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';
import { TextInput as RNTextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View``;

export const Content = styled.View`
  flex-direction: row;
  background: ${theme.colors.white};
  width: 100%;
  height: ${RFValue(40)}px;
  border-radius: 8px;
  overflow: hidden;
`;

export const ContentIcon = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
`;

export const TextInput = styled(RNTextInput)`
  flex: 1;
  padding: 0 ${RFValue(12)}px;
`;

export const Message = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(15)}px;
`;

export const InfoIcon = styled(Ionicons).attrs({
  size: RFValue(15),
  color: theme.colors.error,
})`
  margin-right: ${RFValue(5)}px;
`;
