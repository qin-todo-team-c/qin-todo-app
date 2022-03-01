import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Logo } from './Logo';

export default { title: 'Atoms/Logo', component: Logo } as ComponentMeta<
  typeof Logo
>;

export const QinTodoLogo: ComponentStoryObj<typeof Logo> = {};
