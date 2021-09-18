import React from 'react';
import { Container, Content, ContentIcon, Input, ContentMessage, IconMessage, Message } from './styled';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../../global/styles/theme';
import { TextInputProps } from 'react-native';

interface InputIconProps extends TextInputProps {
  name?:
    | 'help'
    | 'person-outline'
    | 'md-mail-outline'
    | 'md-logo-whatsapp'
    | 'calendar-outline'
    | 'md-location-outline';
}

export function InputIcon({ name = 'help', ...rest }: InputIconProps) {
  return (
    <>
      <Container>
        <Content>
          <ContentIcon>
            <Ionicons name={name} size={18} color={theme.colors.white} />
          </ContentIcon>
          <Input {...rest} />
        </Content>
        <ContentMessage>
          <>
            <IconMessage name="ios-information-circle-sharp" />
            <Message>Have error here!</Message>
          </>
        </ContentMessage>
      </Container>
    </>
  );
}
