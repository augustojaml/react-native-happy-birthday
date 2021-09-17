import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, Label, Icon, Title, Input, ContentMessage, IconMessage, Message } from './styled';

interface IInputLabel extends TextInputProps {
  icon?: string;
  labelName?: string;
  message?: string;
}

export function InputLabel({ icon = 'help-circle', labelName = 'label', message, ...rest }: IInputLabel) {
  return (
    <>
      <Container>
        <Label>
          <Icon name={icon} />
          <Title>{labelName}</Title>
        </Label>
        <Input {...rest} />
        <ContentMessage>
          {message && (
            <>
              <IconMessage name="ios-information-circle-sharp" />
              <Message>{message}</Message>
            </>
          )}
        </ContentMessage>
      </Container>
    </>
  );
}
