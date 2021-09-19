// @ts-nocheck

import React, { useState } from 'react';
import { Container, Content, ContentIcon, Input, ContentMessage, IconMessage, Message } from './styled';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../../global/styles/theme';

import { TextInputProps } from 'react-native';

const types = {
  phone: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  date: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
};

interface InputIconProps extends TextInputProps {
  name?:
    | 'help'
    | 'person-outline'
    | 'md-mail-outline'
    | 'md-logo-whatsapp'
    | 'calendar-outline'
    | 'md-location-outline';
  masker?: string | undefined;
}

export function InputIcon({ name = 'help', masker = undefined, ...rest }: InputIconProps) {
  return (
    <>
      <Container>
        <Content>
          <ContentIcon>
            <Ionicons name={name} size={18} color={theme.colors.white} />
          </ContentIcon>
          <Input
            {...rest}
            mask={types[masker]}
            placeholderTextColor={theme.colors.placeHolderColor}
            placeholderFillCharacter=""
          />
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
