import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';

const meta = {
    component: Navbar,
    title: 'Widgets/Navbar',
    decorators: [
        StoreDecorator({
            user: undefined,
        }),
    ],
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

export const HasUserLight: Story = {
    render: () => <Navbar />,
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'username',
                },
            },
        }),
    ],
};

export const HasUserDark: Story = {
    render: () => <Navbar />,
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'username',
                },
            },
        }),
    ],
};
