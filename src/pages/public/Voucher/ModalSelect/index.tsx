import React, { useCallback } from 'react';
import { Keyboard } from 'react-native';
import { theme } from '../../../../global/styles/theme';
import { ModalItem } from '../../../../utils/modalItems';
import {
  Container,
  Content,
  Header,
  Title,
  Body,
  ItemSelected,
  IconList,
  Text,
  IconContainer,
  IconHeader,
} from './styled';

interface ModalSelectProps {
  closeModal?: () => void;
  setItemSelected?: (selected: string) => void;
  selected?: string;
}

export function ModalSelect({
  closeModal = () => {},
  setItemSelected = (selected: string) => {},
  selected = '',
}: ModalSelectProps) {
  const getSelected = useCallback((selected: string) => {
    setItemSelected(selected);
    closeModal();
  }, []);

  return (
    <>
      <Container></Container>
      <Content>
        <Header>
          <Title>Como você nos conheceu?</Title>
          <IconContainer
            onPress={() => {
              closeModal();
              setItemSelected('');
            }}
          >
            <IconHeader name="close-circle-outline" />
          </IconContainer>
        </Header>
        <Body>
          {ModalItem.map((item, index) => (
            <ItemSelected
              style={{ backgroundColor: selected === item.key ? theme.colors.primary : theme.colors.white }}
              key={item.key}
              onPress={() => getSelected(item.key)}
            >
              <IconList
                name={item.icon}
                style={{ color: selected === item.key ? theme.colors.white : theme.colors.secondary }}
              />
              <Text style={{ color: selected === item.key ? theme.colors.white : theme.colors.secondary }}>
                {item.title}
              </Text>
            </ItemSelected>
          ))}
        </Body>
      </Content>
    </>
  );
}
