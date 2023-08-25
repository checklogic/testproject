import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    component: LoginForm,
    title: 'features/AuthByUsername/LoginForm',
    decorators: [StoreDecorator({})],
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
                isLoading: true,
            },
        }),
    ],
};
