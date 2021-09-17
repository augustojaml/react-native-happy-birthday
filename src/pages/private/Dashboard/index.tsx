import React from 'react';
import { StatusBar } from 'react-native';
import { theme } from '../../../global/styles/theme';
import { Container, Title } from './styled';

export function DashBoard() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.secondary} />
      <Container>
        <Title>DashBoard</Title>
      </Container>
    </>
  );
}
