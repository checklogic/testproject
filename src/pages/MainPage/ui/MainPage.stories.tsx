import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import MainPage from './MainPage';

const meta = {
    component: MainPage,
    title: 'Pages/MainPage',
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    render: () => <MainPage />,
};

export const Dark: Story = {
    render: () => <MainPage />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
