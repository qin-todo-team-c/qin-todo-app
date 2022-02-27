import React from 'react';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type Size = 'small' | 'medium' | 'large';

type AvatorProps = {
  size?: Size;
  source?: ImageSourcePropType;
  onPress: () => void;
};

const sizes: Record<Size, string> = {
  small: '28px',
  medium: '36px',
  large: '48px',
};

const AvatarComponent = styled.Image<Pick<AvatorProps, 'size'>>`
  width: ${(props) => sizes[props.size as Size]};
  height: ${(props) => sizes[props.size as Size]};
  border-radius: 9999px;
  overflow: hidden;
  background-color: gray;
  border-top-width: 2px;
  border-right-width: 2px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-top-color: #fbdfa1;
  border-right-color: #defcb2;
  border-bottom-color: #b8eef8;
  border-left-color: #f4bacf;
`;

export const Avatar: React.VFC<AvatorProps> = ({
  size = 'large',
  source = {
    uri: 'https://avatars.dicebear.com/v2/male/e828b4072fdb3dc6312b67977f0b247a.png',
  },
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AvatarComponent source={source} size={size} />
    </TouchableOpacity>
  );
};
