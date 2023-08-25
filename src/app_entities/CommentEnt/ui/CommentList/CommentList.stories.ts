import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    component: CommentList,
    title: 'app_entities/CommentList',
    decorators: [],
    args: {
        comments: [
            {
                id: '1',
                text: 'some comment',
                user: {
                    id: '2',
                    username: 'user',
                },
            },
            {
                id: '2',
                text: 'some comment 2',
                user: {
                    id: '1',
                    username: 'admin',
                },
            },
        ],
    },
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [],
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const IsLoadingDark: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
