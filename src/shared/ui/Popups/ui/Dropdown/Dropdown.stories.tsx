import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownItem } from './Dropdown';
import { Button } from '../../../Button/Button';

const items: DropdownItem[] = [
    {
        content: 'first',
    },
    {
        content: 'second',
    },
    {
        content: 'third',
    },
];
const meta = {
    component: Dropdown,
    title: 'shared/Popups/Dropdown',
    decorators: [
        (Story) => (
            <div style={{ padding: 150 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items,
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        trigger: <Button>Open</Button>,
        items,
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
        trigger: <Button>Open</Button>,
        items,
    },
};

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        trigger: <Button>Open</Button>,
        items,
    },
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        trigger: <Button>Open</Button>,
        items,
    },
};
