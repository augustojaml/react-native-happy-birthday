import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { H3 } from '../../../global/styles/theme';
import { BorderlessIcon, Container, Title, Icon } from './styled';

interface HeaderTitleProps {
  title?: string;
  showIcon?: boolean;
}

export function HeaderTitle({ title = 'title', showIcon = false }: HeaderTitleProps) {
  const navigation = useNavigation<any>();

  function handleMoveHome() {
    navigation.navigate('Home');
  }

  return (
    <>
      <Container>
        <Title>
          <H3>{title}</H3>
          {showIcon && (
            <BorderlessIcon onPress={handleMoveHome}>
              <Icon name="exit-outline" />
            </BorderlessIcon>
          )}
        </Title>
      </Container>
    </>
  );
}
