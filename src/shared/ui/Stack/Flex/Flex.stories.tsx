import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta = {
    component: Flex,
    title: 'shared/Flex/Flex',
    decorators: [],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>456</div>
                <div>789</div>
            </>
        ),
    },
    decorators: [],
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>123</div>
                <div>456</div>
                <div>789</div>
            </>
        ),
    },
    decorators: [],
};

export const RowGap0: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>456</div>
                <div>789</div>
            </>
        ),
    },
    decorators: [],
};
export const RowGap4: Story = {
    args: {
        gap: '4',
        children: (
            <>
                <div>123</div>
                <div>456</div>
                <div>789</div>
            </>
        ),
    },
    decorators: [],
};

export const RowGap8: Story = {
    args: {
        gap: '8',
        children: (
            <>
                <div>123</div>
                <div>456</div>
                <div>789</div>
            </>
        ),
    },
    decorators: [],
};

export const RowGap16: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>123</div>
                <div>456</div>
                <div>789</div>
            </>
        ),
    },
    decorators: [],
};

export const RowGap32: Story = {
    args: {
        gap: '32',
        children: (
            <>
                <div>123</div>
                <div>456</div>
                <div>789</div>
            </>
        ),
    },
    decorators: [],
};

export const ColumnGap16: Story = {
    args: {
        direction: 'column',
        gap: '16',
        children: (
            <>
                <div>123</div>
                <div>456</div>
                <div>789</div>
            </>
        ),
    },
    decorators: [],
};

export const ColumnGap32: Story = {
    args: {
        direction: 'column',
        gap: '32',
        children: (
            <>
                <div>123</div>
                <div>456</div>
                <div>789</div>
            </>
        ),
    },
    decorators: [],
};

export const ColumnAlingEnd: Story = {
    args: {
        direction: 'column',
        align: 'end',
        children: (
            <>
                <div>123</div>
                <div>456</div>
                <div>789</div>
            </>
        ),
    },
    decorators: [],
};
