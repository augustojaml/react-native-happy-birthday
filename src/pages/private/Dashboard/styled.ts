import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { H1, H3, PBold, PRegular } from '../../../global/styles/components';
import { theme } from '../../../global/styles/theme';

import { Ionicons } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import { CardProps } from '.';

import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.secondary};
  align-items: center;
  padding: ${RFPercentage(10)}px ${RFPercentage(3)}px ${RFPercentage(3)}px ${RFPercentage(3)}px;
`;

export const DashHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom-width: 1px;
  border-color: ${theme.colors.primary};
  padding-bottom: ${RFValue(5)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const Title = styled(H3)``;

export const ContainerIcon = styled(BorderlessButton)`
  flex-direction: row;
  align-items: center;
`;

export const IconDashHeader = styled(Ionicons)`
  color: ${theme.colors.white};
  font-size: ${RFValue(20)}px;
`;

export const List = styled(FlatList as new () => FlatList<CardProps>)`
  margin-bottom: ${RFPercentage(2)}px;
  flex-grow: 0;
`;

export const InfoContainer = styled.View`
  width: 33.33%;
  padding: ${RFValue(5)}px;
  align-items: center;
  justify-content: center;
`;

export const InfoContent = styled.View`
  background: ${theme.colors.white};
  width: 100%;
  padding: ${RFValue(5)}px;
`;

export const InfoHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoTitle = styled(PBold)`
  color: ${theme.colors.secondary};
  font-size: ${RFValue(10)}px;
`;

export const InfoIcon = styled(FontAwesome)`
  font-size: ${RFValue(13)}px;
  color: ${theme.colors.secondary};
`;

export const InfoQuantity = styled(H1)`
  color: ${theme.colors.secondary};
  font-size: ${RFValue(25)}px;
`;

export const DashRow = styled.View`
  background-color: ${theme.colors.white};
  width: 100%;
  height: ${RFValue(40)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${RFValue(10)}px;
  border-radius: 4px;
  margin-bottom: ${RFValue(10)}px;
`;

export const DashTextTDPrimary = styled.View``;
export const DashTextTDSecondary = styled.View`
  border-left-width: 2px;
  border-color: ${theme.colors.secondary};
  padding-left: ${RFValue(10)}px;
  width: ${RFValue(80)}px;
`;

export const DashTextTD = styled(PRegular)`
  color: ${theme.colors.secondary};
  font-size: ${RFValue(12)}px;
`;
