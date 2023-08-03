import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AboutPage from './AboutPage';

const meta = {
    component: AboutPage,
    title: 'Pages/AboutPage',
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
