import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotFoundPage } from './NotFoundPage';

const meta = {
    component: NotFoundPage,
    title: 'Pages/NotFoundPage',
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    render: () => <NotFoundPage />,
};

export const Dark: Story = {
    render: () => <NotFoundPage />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
