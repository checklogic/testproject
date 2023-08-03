import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Sidebar } from './Sidebar';

const meta = {
    component: Sidebar,
    title: 'Widgets/Sidebar',
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    render: () => <Sidebar />,
};

export const Dark: Story = {
    render: () => <Sidebar />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
