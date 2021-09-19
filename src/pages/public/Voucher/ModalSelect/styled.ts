import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { H3, PRegular } from '../../../../global/styles/components';
import { theme } from '../../../../global/styles/theme';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: 'rgba(0,0,0, 1)';
  opacity: 0.6;
  align-items: center;
  justify-content: center;
  padding: ${RFPercentage(5)}px;
`;

export const Content = styled.View`
  background-color: ${theme.colors.white};
  position: absolute;
  width: ${RFPercentage(40)}px;
  left: ${Dimensions.get('window').width / RFValue(2) - RFPercentage(20)}px;
  top: ${RFPercentage(40)}px;
  border-radius: 4px;
`;

export const Header = styled.View`
  background-color: ${theme.colors.secondary};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${RFValue(50)}px;
  padding: 0 ${RFValue(10)}px;
`;

export const Title = styled(H3)`
  line-height: ${RFValue(25)}px;
  text-align: center;
  margin-bottom: ${RFValue(0)}px;
  color: ${theme.colors.primary};
  font-size: 18px;
`;

export const IconContainer = styled.TouchableOpacity``;

export const IconHeader = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
  color: ${theme.colors.primary};
`;

export const Body = styled.View`
  background: #fff;
`;

export const ItemSelected = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 0 ${RFValue(10)}px;
  height: ${RFValue(40)}px;
  border-color: ${theme.colors.secondary};
  border-bottom-width: 1px;
`;

export const IconList = styled(FontAwesome)`
  color: ${theme.colors.secondary};
  font-size: ${RFValue(18)}px;
  margin-right: ${RFValue(8)}px;
`;

export const Text = styled(PRegular)`
  line-height: ${RFValue(25)}px;
  text-align: center;
  margin-bottom: ${RFValue(0)}px;
  color: ${theme.colors.secondary};
`;
