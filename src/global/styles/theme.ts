import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import LogoSVG from '../../assets/logo.svg';

interface IFontsProps {
  textAlign?: string;
  fontSize?: string;
  marginBottom?: string;
  color?: string;
}

export const theme = {
  colors: {
    primary: '#c5aa64',
    secondary: '#293c2a',
    tertiary: '#ea5c5c',
    white: '#ffffff',

    success: '#549529',
    error: '#dc3545',
  },
  fonts: {
    poppinsRegular: 'Poppins_400Regular',
    poppinsBold: 'Poppins_700Bold',
    BalooRegular: 'BalooBhai2_400Regular',
    BalooBold: 'BalooBhai2_700Bold',
  },
};

export const H1 = styled.Text<IFontsProps>`
  font-family: ${theme.fonts.BalooBold};
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
  text-align: ${(props) => (props.textAlign ? 'center' : 'left')};
  font-size: ${(props) => (props.fontSize ? RFValue(Number(props.fontSize)) : RFValue(30))}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '0')}px;
  line-height: ${(props) => (props.fontSize ? RFValue(Number(props.fontSize + 10)) : RFValue(30 + 10))}px;
`;

export const H3 = styled.Text<IFontsProps>`
  font-family: ${theme.fonts.BalooBold};
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
  text-align: ${(props) => (props.textAlign ? 'center' : 'left')};
  font-size: ${(props) => (props.fontSize ? RFValue(Number(props.fontSize)) : RFValue(20))}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '0')}px;
  line-height: ${(props) => (props.fontSize ? RFValue(Number(props.fontSize + 10)) : RFValue(20 + 10))}px;
`;

export const PBold = styled.Text<IFontsProps>`
  font-family: ${theme.fonts.poppinsBold};
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
  text-align: ${(props) => (props.textAlign ? 'center' : 'left')};
  font-size: ${(props) => (props.fontSize ? RFValue(Number(props.fontSize)) : RFValue(16))}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '0')}px;
`;

export const PRegular = styled.Text<IFontsProps>`
  font-family: ${theme.fonts.poppinsRegular};
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
  text-align: ${(props) => (props.textAlign ? 'center' : 'left')};
  font-size: ${(props) => (props.fontSize ? RFValue(Number(props.fontSize)) : RFValue(14))}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '0')}px;
`;

export const LogoImg = styled(LogoSVG).attrs({
  width: RFValue(80),
  height: RFValue(80),
})`
  margin-top: ${RFPercentage(5)}px;
`;
