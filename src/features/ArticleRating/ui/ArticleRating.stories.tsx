import type { Meta, StoryObj } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    component: ArticleRating,
    title: 'features/ArticleRating',
    decorators: [],
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { articleId: '1' },
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                },
            },
        }),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 4,
                    },
                ],
            },
        ],
    },
};
