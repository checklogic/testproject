import type { Meta, StoryObj } from '@storybook/react';
import { RatingCard } from './RatingCard';

const meta = {
    component: RatingCard,
    title: 'entities/Rating/RatingCard',
    decorators: [],
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        rating: 4,
    },
    decorators: [],
};

export const Empty: Story = {
    args: {
        onAccept: () => {},
    },
    decorators: [],
};
