import React from 'react';
import { Container, Label, InputText, InfoIcon, Message } from './styled';
import { FontAwesome } from '@expo/vector-icons';
import { PRegular, PSemiBold, theme } from '../../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

interface InputLabelProps {
  label?: string;
  component: React.ComponentClass<any>;
  type: string;
}

export function InputLabel({ label = 'label', type, component: Component }: InputLabelProps) {
  return (
    <>
      <Container>
        <Label>
          <Component name={type} size={RFValue(14)} color={theme.colors.primary} />
          <PRegular fontSize="14" color={theme.colors.primary} marginBottom="-3" marginLeft="5">
            {label}
          </PRegular>
        </Label>
        <InputText />
        <Message>
          <InfoIcon name="information-circle-outline" />
          <PSemiBold fontSize="11" color={theme.colors.error}>
            Message Error
          </PSemiBold>
        </Message>
      </Container>
    </>
  );
}
