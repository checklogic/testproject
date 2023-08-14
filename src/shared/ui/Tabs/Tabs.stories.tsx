import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { action } from '@storybook/addon-actions';

const meta = {
    component: Tabs,
    title: 'shared/Tabs',
    decorators: [],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: 'value2',
        onTabClick: action('onTabClick'),

        tabs: [
            { content: 'content1', value: 'value1' },
            { content: 'content2', value: 'value2' },
            { content: 'content3', value: 'value3' },
        ],
    },
    decorators: [],
};
