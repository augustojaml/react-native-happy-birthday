import React from 'react';
import { Container, Icon, ContainerButton } from './styled';

interface IHeaderProps {
  background?: string;
  showBackIcon?: boolean;
  showAdminIcon?: boolean;
  onPressBackIcon?: () => void;
  onPressAdminIcon?: () => void;
}

export function Header({
  background,
  showBackIcon = true,
  showAdminIcon = true,
  onPressBackIcon = () => {
    console.log('onPressBackIcon');
  },
  onPressAdminIcon = () => {
    console.log('onPressAdminIcon');
  },
}: IHeaderProps) {
  return (
    <>
      <Container background={background}>
        <ContainerButton onPress={onPressBackIcon}>{showBackIcon && <Icon name="arrow-back" />}</ContainerButton>
        <ContainerButton onPress={onPressAdminIcon}>
          {showAdminIcon && <Icon name="admin-panel-settings" />}
        </ContainerButton>
      </Container>
    </>
  );
}
