import { TextInput } from 'react-native';
import styled from 'styled-components/native';

import { PRegular } from '../../../global/styles/components';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../../global/styles/theme';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(8)}px;
`;
export const Icon = styled(Ionicons)`
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.primary};
`;

export const Title = styled(PRegular)`
  color: ${theme.colors.primary};
  margin-top: ${RFValue(2)}px;
  font-size: ${RFValue(14)}px;
  margin-left: ${RFValue(5)}px; ;
`;

export const Input = styled(TextInput)`
  border-bottom-width: 1px;
  border-color: ${theme.colors.primary};
  color: ${theme.colors.primary};
  padding-bottom: ${RFValue(4)}px;
`;

export const ContentMessage = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(3)}px;
  margin-bottom: ${RFValue(8)}px;
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
