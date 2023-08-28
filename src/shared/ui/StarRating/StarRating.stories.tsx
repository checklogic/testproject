import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';

const meta = {
    component: StarRating,
    title: 'shared/StarRating',
    decorators: [],
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        selectedStars: 3,
    },
    decorators: [],
};

export const Empty: Story = {
    args: {
        onSelect: () => {},
    },
    decorators: [],
};
