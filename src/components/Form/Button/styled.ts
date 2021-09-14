import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';

interface ButtonProps {
  background?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  background: ${(props) => (props.background ? props.background : theme.colors.success)};
  padding: ${RFValue(12)}px;
  border-radius: 8px;
  justify-content: center;
`;
