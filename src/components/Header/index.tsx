import React from 'react';
import { Container, Icon, ContainerIcon } from './styled';

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
        {showBackIcon && (
          <>
            <ContainerIcon onPress={onPressBackIcon}>
              <Icon name="arrow-back" />
            </ContainerIcon>
          </>
        )}

        {showAdminIcon && (
          <>
            <ContainerIcon onPress={onPressAdminIcon}>
              <Icon name="admin-panel-settings" />
            </ContainerIcon>
          </>
        )}
      </Container>
    </>
  );
}
