import styled from 'styled-components/native';

type TitleProps = {
  when: 'today' | 'tomomorow' | 'soon';
};

const colors = {
  today: '#F43F5E',
  tomomorow: '#FB923C',
  soon: '#FBBF24',
};

const TextStyle = styled.Text<TitleProps>`
  flex-direction: row;
  font-size: 22px;
  font-weight: 700;
  color: ${(props) => colors[props.when]};
`;

export const Title = (props: TitleProps) => {
  const text =
    props.when === 'today'
      ? '今日'
      : props.when === 'tomomorow'
      ? '明日'
      : '今度';

  return <TextStyle when={props.when}>{text}する</TextStyle>;
};
