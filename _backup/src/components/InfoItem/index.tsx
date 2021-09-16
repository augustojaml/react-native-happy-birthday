import React from 'react';
import { H3, PRegular, theme } from '../../global/styles/theme';
import { FlatItemProps, Icon, InfoContainer, InfoHeader } from './style';

interface InfoProps {
  item: FlatItemProps;
}

export function InfoItem({ item }: InfoProps) {
  return (
    <>
      <InfoContainer key={item.id}>
        <InfoHeader>
          <PRegular fontSize="12" color={theme.colors.secondary}>
            {item.title}
          </PRegular>
          <Icon name={item.type} />
        </InfoHeader>
        <H3 color={theme.colors.secondary}>{item.voucher}</H3>
      </InfoContainer>
    </>
  );
}
