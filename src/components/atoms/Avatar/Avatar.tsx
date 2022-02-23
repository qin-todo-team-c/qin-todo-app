import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

type Size = 'small' | 'medium' | 'large';

interface AvatarProps {
  size?: Size;
  source?: ImageSourcePropType;
}

const sizes: Record<Size, string> = {
  small: '24px',
  medium: '32px',
  large: '44px',
};

const AvatarComponent = styled.Image<Pick<AvatarProps, 'size'>>`
  width: ${(props) => sizes[props.size as Size]};
  height: ${(props) => sizes[props.size as Size]};
  border-radius: 9999px;
  overflow: hidden;
  background-color: gray;
`;

const AvatarWrapper = styled.View`
  border-radius: 9999px;
  text-align: center;
  border-top-width: 2px;
  border-right-width: 2px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-top-color: #fbdfa1;
  border-right-color: #defcb2;
  border-bottom-color: #b8eef8;
  border-left-color: #f4bacf;
`;

export const Avatar: React.VFC<AvatarProps> = ({
  size = 'medium',
  source = {
    uri: 'https://avatars.dicebear.com/v2/male/e828b4072fdb3dc6312b67977f0b247a.png',
  },
}) => {
  return (
    <AvatarWrapper>
      <AvatarComponent source={source} size={size} />
    </AvatarWrapper>
  );
};
