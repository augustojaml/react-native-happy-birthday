import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { PRegular } from '../../../global/styles/components';
import { theme } from '../../../global/styles/theme';

import { Ionicons } from '@expo/vector-icons';

interface ContentIconProps {
  background?: string;
}

interface IconProps {
  color?: string;
}

interface PlaceholderProps {
  color?: string;
}

export const Container = styled.TouchableOpacity``;

export const Content = styled.View`
  background: ${theme.colors.white};
  height: ${RFValue(35)}px;
  width: 100%;
  border-radius: ${RFValue(4)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentIcon = styled.View<ContentIconProps>`
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.background ? props.background : theme.colors.primary)};
  border-top-left-radius: ${RFValue(4)}px;
  border-bottom-left-radius: ${RFValue(4)}px;
`;

export const Icon = styled(Ionicons)<IconProps>`
  font-size: ${RFValue(18)}px;
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
`;

export const ContentPlaceHolder = styled.View`
  flex: 1;
`;

export const Placeholder = styled(PRegular)<PlaceholderProps>`
  padding: 0 ${RFValue(10)}px;
  color: ${(props) => (props.color ? props.color : theme.colors.placeHolderColor)};
  font-family: ${theme.fonts.poppinsRegular};
  font-size: ${RFValue(13)}px;
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
