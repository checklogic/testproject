import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
    component: ThemeSwitcher,
    title: 'Widgets/ThemeSwitcher',
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    render: () => <ThemeSwitcher />,
};

export const Dark: Story = {
    render: () => <ThemeSwitcher />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
