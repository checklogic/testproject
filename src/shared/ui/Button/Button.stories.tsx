import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button, ThemeButton } from 'shared/ui/Button/Button';

const meta = {
    component: Button,
    title: 'Shared/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryDark: Story = {
    render: () => <Button>123</Button>,
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clear: Story = {
    render: () => <Button theme={ThemeButton.CLEAR}>Clear</Button>,
};

export const Outline: Story = {
    render: () => <Button theme={ThemeButton.OUTLINE}>Outline</Button>,
};
