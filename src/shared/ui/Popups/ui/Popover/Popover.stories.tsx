import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';

const meta = {
    component: Popover,
    title: 'shared/Popups/Popover',
    decorators: [],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
