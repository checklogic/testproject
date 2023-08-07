import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    component: LoginForm,
    title: 'Feature/LoginForm',
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'username',
                password: 'password',
            },
        }),
    ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const PrimaryWithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'username',
                password: 'password',
                error: 'error',
            },
        }),
    ],
};

export const PrimaryLoading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'username',
                password: 'password',
                isLoading: true,
            },
        }),
    ],
};
