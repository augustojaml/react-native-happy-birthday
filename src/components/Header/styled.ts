import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';

import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';
import { BorderlessButton } from 'react-native-gesture-handler';

export interface IHeaderProps {
  background?: string;
}

export const Container = styled.View<IHeaderProps>`
  background: ${(props) => (props.background ? props.background : theme.colors.primary)};
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: ${RFPercentage(3)}px;
  height: ${RFPercentage(8)}px;
`;

export const ContainerIcon = styled(BorderlessButton)`
  display: flex;
`;

export const Icon = styled(MaterialIcons)`
  font-size: ${RFValue(25)}px;
  color: ${theme.colors.white};
`;
