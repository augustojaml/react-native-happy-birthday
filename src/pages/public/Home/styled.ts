import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { H1, H3, PRegular, PBold } from '../../../global/styles/components';
import { theme } from '../../../global/styles/theme';

import BalloonSVG from '../../../assets/balloon.svg';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.primary};
  align-items: center;
  padding: ${RFPercentage(3)}px;
`;

export const Title = styled(H1)`
  line-height: ${RFValue(40)}px;
  margin-bottom: ${RFValue(10)}px; ;
`;

export const TextRegular = styled(PRegular)`
  text-align: center;
  margin-bottom: ${RFValue(10)}px;
`;
export const TextBold = styled(PBold)``;

export const SubTitle = styled(H3)`
  line-height: ${RFValue(30)}px;
`;

export const BalloonImg = styled(BalloonSVG).attrs({
  width: RFValue(150),
  height: RFValue(150),
})`
  margin: ${RFValue(20)}px 0;
`;
