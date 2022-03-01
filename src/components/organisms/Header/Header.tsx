import styled from 'styled-components/native';
import { Avatar } from '../../atoms/Avatar';
import { Logo } from '../../atoms/Logo';

const HeaderContainer = styled.View`
  height: 56px;
  margin-top: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px;
  position: relative;
`;

const AvatarContainer = styled.View`
  position: absolute;
  right: 24px;
`;

export const Header: React.VFC = () => {
  return (
    <HeaderContainer>
      <Logo />
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
    </HeaderContainer>
  );
};
