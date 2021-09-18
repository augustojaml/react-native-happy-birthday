import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';

import { Container } from './styled';
import { theme } from '../../global/styles/theme';

export function Loading() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      <Container>
        <ActivityIndicator size="large" color={theme.colors.secondary} />
      </Container>
    </>
  );
}
