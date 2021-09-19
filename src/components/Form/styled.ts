import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

interface FormContainerProps {
  background?: string;
}

export const Container = styled.View<FormContainerProps>`
  width: 100%;
  background-color: ${(props) => (props.background ? props.background : theme.colors.primary)};
  border-radius: ${RFValue(6)}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
