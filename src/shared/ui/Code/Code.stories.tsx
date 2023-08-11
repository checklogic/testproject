import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta = {
    component: Code,
    title: 'shared/Code',
    decorators: [],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: `
const meta = {
    component: Code,
    title: 'shared/Code',
    decorators: [],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;
      `,
    },
    decorators: [],
};
