import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';

const meta = {
    component: Navbar,
    title: 'Widgets/Navbar',
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    render: () => <Navbar />,
};

export const Dark: Story = {
    render: () => <Navbar />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
