import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

export default { title: 'Atoms/Avatar', component: Avatar } as ComponentMeta<
  typeof Avatar
>;

export const AvatarDefault: ComponentStoryObj<typeof Avatar> = {
  args: {
    size: 'large',
    source: {
      uri: 'https://avatars.dicebear.com/v2/male/e828b4072fdb3dc6312b67977f0b247a.png',
    },
  },
};
