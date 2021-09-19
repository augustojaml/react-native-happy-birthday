import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { PBold } from '../../../global/styles/theme';
import { Container } from './styled';

interface ButtonProps extends RectButtonProps {
  title?: string;
  onPress?: () => void;
  background?: string;
}

export function Button({ title = 'Button', background, onPress = () => {}, ...rest }: ButtonProps) {
  return (
    <>
      <Container {...rest} onPress={onPress} background={background}>
        <PBold textAlign="center">{title}</PBold>
      </Container>
    </>
  );
}
