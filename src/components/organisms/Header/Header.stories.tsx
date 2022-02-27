import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const QinTodoLogo: ComponentStoryObj<typeof Header> = {};
