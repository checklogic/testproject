import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    component: Text,
    title: 'Shared/Text',
    args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
    decorators: [],
};

export const OnlyTitleLight: Story = {
    args: {
        title: 'Title',
    },
    decorators: [],
};

export const OnlyTextLight: Story = {
    args: {
        text: 'Text',
    },
    decorators: [],
};

export const Dark: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR,
    },
};

export const SizeS: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.S,
    },
};

export const SizeM: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.M,
    },
};

export const SizeL: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.L,
    },
};
