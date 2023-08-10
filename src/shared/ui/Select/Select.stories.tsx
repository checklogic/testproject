import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
    component: Select,
    title: 'Shared/Select',
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {
        label: 'Test selection',
        options: [
            { content: '123', value: '123' },
            { content: '456', value: '456' },
            { content: '789', value: '789' },
        ],
    },
};
