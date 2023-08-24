import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta = {
    component: ListBox,
    title: 'shared/Popups/ListBox',
    decorators: [],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items: [{ value: '1', content: 1 }],
    },
    decorators: [],
};
