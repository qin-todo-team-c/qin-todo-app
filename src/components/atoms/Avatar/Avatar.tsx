import styled from 'styled-components';

type Size = 'small' | 'medium' | 'large';

interface AvatarProps {
  size?: Size;
  src?: string;
  alt?: string;
}

const sizes: Record<Size, string> = {
  small: '2rem',
  medium: '3rem',
  large: '4rem',
};

const AvatarComponent = styled.img<Pick<AvatarProps, 'size'>>`
  display: inline-block;
  width: ${(props) => sizes[props.size as Size]};
  height: ${(props) => sizes[props.size as Size]};
  border-radius: 9999px;
  overflow: hidden;
  background-color: gray;
`;

export const Avatar: React.VFC<AvatarProps> = ({
  size = 'large',
  src = 'https://avatars.dicebear.com/v2/male/e828b4072fdb3dc6312b67977f0b247a.svg',
  alt = '',
}) => {
  return <AvatarComponent src={src} alt={alt} size={size} />;
};
