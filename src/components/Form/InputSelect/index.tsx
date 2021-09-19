import React from 'react';
import { H3 } from '../../../global/styles/components';
import {
  Container,
  Content,
  ContentIcon,
  ContentMessage,
  ContentPlaceHolder,
  Icon,
  IconMessage,
  Message,
  Placeholder,
} from './styled';

import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../../global/styles/theme';

interface InputSelectProps {
  name?: 'help' | 'md-location-outline';
  title?: string;
  onPress?: () => void;
  placeHolderColor?: string;
}

export function InputSelect({
  name = 'help',
  title = 'Onde nos conheceu?',
  onPress = () => {},
  placeHolderColor,
}: InputSelectProps) {
  return (
    <>
      <Container onPress={onPress}>
        <Content>
          <ContentIcon>
            <Icon name={name} color={theme.colors.white} />
          </ContentIcon>
          <ContentPlaceHolder>
            <Placeholder color={placeHolderColor}>{title}</Placeholder>
          </ContentPlaceHolder>
          <ContentIcon background="transparent">
            <Icon name="md-chevron-down" color={theme.colors.secondary} />
          </ContentIcon>
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
