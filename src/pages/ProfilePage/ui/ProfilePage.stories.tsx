import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    component: ProfilePage,
    title: 'Pages/ProfilePage',
    decorators: [
        StoreDecorator({
            profile: {
                data: undefined,
                error: undefined,
                isLoading: false,
                readonly: true,
            },
        }),
    ],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    render: () => <ProfilePage />,
};

export const Dark: Story = {
    render: () => <ProfilePage />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
