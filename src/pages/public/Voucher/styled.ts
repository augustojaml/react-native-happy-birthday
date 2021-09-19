import { Modal } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { H1, H3, PBold, PRegular } from '../../../global/styles/components';
import { theme } from '../../../global/styles/theme';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})`
  background: ${theme.colors.primary};
  padding: 0 ${RFPercentage(3)}px;
`;

export const Title = styled(H1)`
  line-height: ${RFValue(40)}px;
  margin-bottom: ${RFValue(10)}px; ;
`;

export const TextRegular = styled(PRegular)`
  text-align: center;
  margin-bottom: ${RFValue(20)}px;
`;
export const TextBold = styled(PBold)``;

export const SubTitle = styled(H3)`
  line-height: ${RFValue(25)}px;
  text-align: center;
  margin-bottom: ${RFValue(10)}px;
`;

export const FormVoucher = styled.View`
  background: ${theme.colors.secondary};
  width: 100%;
  border-radius: 5px;
  padding: ${RFValue(10)}px;
  margin-bottom: ${RFValue(50)}px;
`;

export const FormGroup = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const FormInputGroup = styled.View`
  width: 48%;
`;

export const FormSubTitle = styled(H3)`
  line-height: ${RFValue(25)}px;
  text-align: center;
  margin-top: ${RFValue(10)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const ModalContent = styled(Modal).attrs({
  transparent: true,
  animationType: 'fade',
  statusBarTranslucent: true,
})`
  background-color: red;
  opacity: 0.8;
`;
