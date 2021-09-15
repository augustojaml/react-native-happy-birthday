import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

interface HeaderProps {
  background?: string;
}

export const Container = styled.View<HeaderProps>`
  background: ${(props) => (props.background ? props.background : theme.colors.primary)};
  height: ${RFPercentage(10)}px;
  padding: 0 ${RFPercentage(3)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BorderlessIcon = styled(BorderlessButton)`
  margin-top: ${RFPercentage(5)}px;
`;

export const IconBack = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
  color: ${theme.colors.white};
`;

export const IconAdmin = styled(MaterialIcons)`
  font-size: ${RFValue(24)}px;
  color: ${theme.colors.white};
`;
