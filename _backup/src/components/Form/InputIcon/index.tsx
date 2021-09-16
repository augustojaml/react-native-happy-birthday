import React from 'react';
import { PSemiBold, theme } from '../../../global/styles/theme';
import { Container, Content, ContentIcon, InfoIcon, Message, TextInput } from './styled';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInputProps } from 'react-native';

interface InputIconProps extends TextInputProps {
  component: React.ComponentClass<any>;
  type: string;
}

export function InputIcon({ component: Component, type, ...rest }: InputIconProps) {
  return (
    <>
      <Container>
        <Content>
          <ContentIcon>
            <Component name={type} size={RFValue(15)} color={theme.colors.white} />
          </ContentIcon>
          <TextInput {...rest} />
        </Content>
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
