import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { PRegular } from '../../../global/styles/components';
import { TextInput } from 'react-native';

export const Container = styled.View`
  margin-bottom: ${RFValue(12)}px; ;
`;

export const Content = styled.View`
  background: ${theme.colors.white};
  height: ${RFValue(35)}px;
  width: 100%;
  border-radius: ${RFValue(4)}px;
  flex-direction: row;
`;

export const ContentIcon = styled.View`
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary};
  border-top-left-radius: ${RFValue(4)}px;
  border-bottom-left-radius: ${RFValue(4)}px;
`;

export const Input = styled(TextInput)`
  width: 100%;
  background: transparent;
  padding: 0 ${RFValue(10)}px;
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.poppinsSemiBold};
`;

export const ContentMessage = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(3)}px;
  height: ${RFValue(16)}px;
`;

export const IconMessage = styled(Ionicons)`
  font-size: ${RFValue(12)}px;
  color: ${theme.colors.error};
`;

export const Message = styled(PRegular)`
  color: ${theme.colors.error};
  margin-top: ${RFValue(2)}px;
  font-size: ${RFValue(10)}px;
  margin-left: ${RFValue(5)}px; ;
`;
