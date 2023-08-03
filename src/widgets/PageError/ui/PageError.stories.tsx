import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';

const meta = {
    component: PageError,
    title: 'Widgets/PageError',
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    render: () => <PageError />,
};

export const Dark: Story = {
    render: () => <PageError />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
