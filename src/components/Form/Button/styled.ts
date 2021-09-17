import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';

import { Ionicons } from '@expo/vector-icons';

interface IContainerProps {
  marginTop?: string;
  background?: string;
}

export const Container = styled(RectButton)<IContainerProps>`
  width: 100%;
  background: ${(props) => (props.background ? props.background : theme.colors.primary)};
  border-radius: ${RFValue(5)}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${RFValue(40)}px;
  margin-top: ${(props) => (props.marginTop ? RFValue(Number(props.marginTop)) : 0)}px;
`;

export const IconEnter = styled(Ionicons)`
  font-size: ${RFValue(25)}px;
  color: ${theme.colors.white};
  margin-left: ${RFValue(8)}px;
`;
