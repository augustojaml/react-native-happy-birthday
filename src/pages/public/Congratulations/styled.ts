import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { H1, theme } from '../../../../_backup/src/global/styles/theme';
import { H3, PBold, PRegular } from '../../../global/styles/components';
import { AntDesign } from '@expo/vector-icons';

import PresentSVG from '../../../assets/present-2.svg';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
  padding: 0 ${RFPercentage(3)}px;
`;

export const Title = styled(H1)`
  line-height: ${RFValue(40)}px;
  margin-bottom: ${RFValue(10)}px; ;
`;
export const SubTitle = styled(H3)`
  line-height: ${RFValue(25)}px;
  text-align: center;
  margin-bottom: ${RFValue(10)}px;
  color: ${theme.colors.secondary};
`;

export const PresentImg = styled(PresentSVG).attrs({
  width: RFValue(100),
  height: RFValue(100),
})`
  margin-top: ${RFValue(15)}px;
  margin-bottom: ${RFValue(25)}px;
`;

export const TextRegular = styled(PRegular)`
  text-align: center;
  margin-bottom: ${RFValue(20)}px;
`;
export const TextBold = styled(PBold)``;

export const BorderlessIcon = styled(BorderlessButton)`
  margin-top: ${RFPercentage(5)}px;
  align-items: center;
`;

export const IconHome = styled(AntDesign)`
  font-size: ${RFValue(24)}px;
  color: ${theme.colors.secondary};
`;
