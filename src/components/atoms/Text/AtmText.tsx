import styled from 'styled-components/native';

type TextProps = {
  children?: string;
};

const Text = styled.Text`
  font-size: 16px;
`;
export const AtmText = (props: TextProps) => {
  return <Text>{props.children}</Text>;
};
