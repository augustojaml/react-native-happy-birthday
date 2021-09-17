import React from 'react';
import { H1 } from '../../global/styles/components';
import { Container } from './styled';

interface FormProps {
  background?: string;
  children: React.ReactNode;
}

export function Form({ background, children }: FormProps) {
  return (
    <>
      <Container background={background}>{children}</Container>
    </>
  );
}
