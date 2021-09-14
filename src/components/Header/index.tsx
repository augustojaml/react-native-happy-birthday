import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { H3, PBold } from '../../global/styles/theme';
import { Container, BorderlessIcon, IconBack, IconAdmin } from './styled';

interface HeaderProps {
  showBack?: boolean;
  showSetting?: boolean;
  onPressBack?: () => void;
  onPressSetting?: () => void;
}

export function Header({
  showBack = false,
  showSetting = false,
  onPressBack = () => {},
  onPressSetting = () => {},
}: HeaderProps) {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      {showBack && (
        <BorderlessIcon onPress={onPressBack}>
          <IconBack name="arrow-back-sharp" />
        </BorderlessIcon>
      )}

      {showSetting && (
        <BorderlessIcon onPress={onPressSetting}>
          <IconAdmin name="admin-panel-settings" />
        </BorderlessIcon>
      )}
    </Container>
  );
}
