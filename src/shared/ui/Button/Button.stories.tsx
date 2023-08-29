import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';

const meta = {
    component: Button,
    title: 'Shared/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryDark: Story = {
    args: {
        children: 'text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clear: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR,
    },
};

export const InvertedClear: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.INVERTED_CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineSizeM: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const Background: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const InvertedBackground: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.INVERTED_BACKGROUND,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.INVERTED_BACKGROUND,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        square: true,
        size: ButtonSize.M,
        theme: ButtonTheme.INVERTED_BACKGROUND,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        square: true,
        size: ButtonSize.L,
        theme: ButtonTheme.INVERTED_BACKGROUND,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        square: true,
        size: ButtonSize.XL,
        theme: ButtonTheme.INVERTED_BACKGROUND,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        disabled: true,
    },
};
