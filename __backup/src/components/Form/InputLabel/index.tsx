import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Label, TextInput, InfoIcon, Message } from './styled';
import { PRegular, PSemiBold, theme } from '../../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

interface InputLabelProps extends TextInputProps {
  label?: string;
  component: React.ComponentClass<any>;
  type: string;
  error?: string;
}

export function InputLabel({ label = 'label', type, component: Component, error, ...rest }: InputLabelProps) {
  return (
    <>
      <Container>
        <Label>
          <Component name={type} size={RFValue(14)} color={theme.colors.primary} />
          <PRegular fontSize="14" color={theme.colors.primary} marginBottom="-3" marginLeft="5">
            {label}
          </PRegular>
        </Label>
        <TextInput {...rest} />
        <Message>
          {error && (
            <>
              <InfoIcon name="information-circle-outline" />
              <PSemiBold fontSize="11" color={theme.colors.error}>
                {error}
              </PSemiBold>
            </>
          )}
        </Message>
      </Container>
    </>
  );
}
