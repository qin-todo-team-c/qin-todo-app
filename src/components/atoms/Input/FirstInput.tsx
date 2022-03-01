import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  width: 100%;
  font-size: 16px;
`;

export const FirstInput = () => {
  return <TextInput placeholder="タスクを追加する" />;
};
