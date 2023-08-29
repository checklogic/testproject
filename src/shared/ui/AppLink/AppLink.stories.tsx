import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from '@/shared/const/theme';

const meta = {
    component: AppLink,
    title: 'Shared/AppLink',
    args: { to: '/', children: 'text' },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: { theme: AppLinkTheme.PRIMARY },
};

export const SecondaryLight: Story = {
    args: { theme: AppLinkTheme.SECONDARY },
};

export const RedLight: Story = {
    args: { theme: AppLinkTheme.RED },
};

export const PrimaryDark: Story = {
    args: { theme: AppLinkTheme.PRIMARY },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
    args: { theme: AppLinkTheme.SECONDARY },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedDark: Story = {
    args: { theme: AppLinkTheme.RED },
    decorators: [ThemeDecorator(Theme.DARK)],
};
