import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageLoader } from './PageLoader';

const meta = {
    component: PageLoader,
    title: 'Widgets/PageLoader',
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    render: () => <PageLoader />,
};

export const Dark: Story = {
    render: () => <PageLoader />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
