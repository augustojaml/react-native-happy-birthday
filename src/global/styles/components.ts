import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import LogoSVG from '../../assets/logo.svg';
import { theme } from './theme';

/**
 * FONTS
 */
interface IFontsProps {
  textAlign?: string;
  fontSize?: string;
  marginBottom?: string;
  marginLeft?: string;
  color?: string;
}

export const H1 = styled.Text<IFontsProps>`
  font-family: ${theme.fonts.BalooBold};
  font-size: ${(props) => (props.fontSize ? RFValue(Number(props.fontSize)) : RFValue(30))}px;
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
`;

export const H3 = styled.Text<IFontsProps>`
  font-family: ${theme.fonts.BalooBold};
  font-size: ${(props) => (props.fontSize ? RFValue(Number(props.fontSize)) : RFValue(20))}px;
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
`;

export const PBold = styled.Text<IFontsProps>`
  font-family: ${theme.fonts.poppinsBold};
  font-size: ${(props) => (props.fontSize ? RFValue(Number(props.fontSize)) : RFValue(16))}px;
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
`;

export const PSemiBold = styled.Text<IFontsProps>`
  font-family: ${theme.fonts.poppinsSemiBold};
  font-size: ${(props) => (props.fontSize ? RFValue(Number(props.fontSize)) : RFValue(16))}px;
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
`;

export const PRegular = styled.Text<IFontsProps>`
  font-family: ${theme.fonts.poppinsRegular};
  font-size: ${(props) => (props.fontSize ? RFValue(Number(props.fontSize)) : RFValue(14))}px;
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
`;

/**
 * LOGO
 */
interface ILogoProps {
  marginTop?: string;
  marginBottom?: string;
}

export const LogoImg = styled(LogoSVG).attrs({
  width: RFValue(80),
  height: RFValue(80),
})<ILogoProps>`
  margin-top: ${(props) => (props.marginTop ? RFPercentage(Number(props.marginTop)) : RFPercentage(0))}px;
  margin-bottom: ${(props) => (props.marginBottom ? RFPercentage(Number(props.marginBottom)) : RFPercentage(0))}px;
`;
