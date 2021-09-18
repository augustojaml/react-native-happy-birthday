import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { H3 } from '../../../global/styles/components';
import { Container, IconEnter } from './styled';

interface IButtonProps extends RectButtonProps {
  marginTop?: string;
  marginTBottom?: string;
  background?: string;
  title?: string;
  icon?: string;
}

export function Button({
  marginTop = '0',
  marginTBottom = '0',
  background,
  title = 'Button',
  icon = 'md-enter',
  ...rest
}: IButtonProps) {
  return (
    <>
      <Container marginTop={marginTop} marginTBottom={marginTBottom} background={background} {...rest}>
        <H3>{title}</H3>
        <IconEnter name={icon} />
      </Container>
    </>
  );
}
