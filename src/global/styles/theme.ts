import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import LogoSVG from '../../assets/logo.svg';

interface IFontsProps {
  textAlign?: string;
  fontSize?: string;
  marginBottom?: string;
  marginLeft?: string;
  color?: string;
}

interface ILogoProps {
  marginTop?: string;
}

export const theme = {
  colors: {
    primary: '#c5aa64',
    secondary: '#293c2a',
    tertiary: '#ea5c5c',
    white: '#ffffff',

    success: '#549529',
    error: '#dc3545',

    placeHolderColor: '#e2d4b1',
  },
  fonts: {
    poppinsRegular: 'Poppins_400Regular',
    poppinsBold: 'Poppins_700Bold',
    poppinsSemiBold: 'Poppins_600SemiBold',
    BalooRegular: 'BalooBhai2_400Regular',
    BalooBold: 'BalooBhai2_700Bold',
  },
};
