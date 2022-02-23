import styled from 'styled-components/native';
import TodoLogo from '../../../../assets/qin-todo-logo.svg';

const LogoWrapper = styled.View``;

export const Logo: React.VFC = () => {
  return (
    <LogoWrapper>
      <TodoLogo />
    </LogoWrapper>
  );
};
