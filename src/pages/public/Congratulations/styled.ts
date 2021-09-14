import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';
import PresentSVG from '../../../assets/present-2.svg';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary};
  padding: ${RFPercentage(3)}px;
`;

export const PresentImg = styled(PresentSVG).attrs({
  width: RFValue(100),
  height: RFValue(100),
})`
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(30)}px;
`;

export const BorderlessIcon = styled(BorderlessButton)`
  margin-top: ${RFPercentage(5)}px;
  align-items: center;
`;

export const IconHome = styled(AntDesign)`
  font-size: ${RFValue(24)}px;
  color: ${theme.colors.white};
`;
