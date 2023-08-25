import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AboutPage from './AboutPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    component: AboutPage,
    title: 'Pages/AboutPage',
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    render: () => <AboutPage />,
};

export const Dark: Story = {
    render: () => <AboutPage />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
