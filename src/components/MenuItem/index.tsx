import React from 'react'
import * as C from './styles'

interface Props {
  Icon: React.ReactNode;
  Text: string;
  ShowText: boolean;
}
const MenuItem = ({ Icon, Text, ShowText }: Props) => {
  return (
    <C.Wrapper>
      <C.IconWrapper>{Icon}</C.IconWrapper>
      <C.TextWrapper $visible={ShowText}>{Text}</C.TextWrapper>
    </C.Wrapper>
  );
};

export default MenuItem;
