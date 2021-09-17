import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { H3 } from '../../../global/styles/components';
import { Container, IconEnter } from './styled';

interface IButtonProps extends RectButtonProps {
  marginTop?: string;
  background?: string;
  title?: string;
}

export function Button({ marginTop = '0', background, title = 'Button', ...rest }: IButtonProps) {
  return (
    <>
      <Container marginTop={marginTop} background={background} {...rest}>
        <H3>{title}</H3>
        <IconEnter name="md-enter" />
      </Container>
    </>
  );
}
