import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';

import BalloonSVG from '../../../assets/balloon.svg';
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background: ${theme.colors.primary};
  padding: ${RFPercentage(3)}px;
`;

export const BalloonImg = styled(BalloonSVG).attrs({
  width: RFValue(150),
  height: RFValue(150),
})`
  margin-bottom: ${RFValue(30)}px;
`;
